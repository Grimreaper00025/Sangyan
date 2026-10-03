"""Build-time synthesis of committed PUBLIC copy. No service, credential or user data.
Usage: python generate-audio.py --models /path/to/models [--language hi] [--limit 2]
Models: Meta MMS-TTS, CC-BY-NC-4.0. Recordings remain non-commercial.
"""
import argparse,hashlib,json,pathlib,re,subprocess,tempfile,unicodedata,wave,time
import numpy as np
import torch
from transformers import VitsModel,AutoTokenizer
ROOT=pathlib.Path(__file__).resolve().parents[1]
MODEL={'en':'eng','hi':'hin','bn':'ben','mr':'mar','ta':'tam','ur':'urd-script_arabic'}
RULES=json.loads((ROOT/'audio/pronunciation.json').read_text())
PUBLIC=json.loads((ROOT/'audio/public-text.json').read_text())
parser=argparse.ArgumentParser();parser.add_argument('--models',required=True);parser.add_argument('--language',choices=MODEL);parser.add_argument('--limit',type=int);args=parser.parse_args()
torch.set_num_threads(4)

def normalize(text,lang):
 text=unicodedata.normalize('NFC',text)
 text=''.join(str(unicodedata.decimal(c)) if c.isdecimal() else c for c in text)
 text=re.sub(r'\d+',lambda m:RULES['numbers'][lang][m[0]],text)
 if lang!='en':
  column=RULES['columns'].index(lang);words={k.lower():v[column] for k,v in RULES['words'].items()}
  text=re.sub(r'[A-Za-z]+(?:-[A-Za-z]+)*',lambda m:words[m[0].lower()],text)
 else:
  for word in ['HDFC','SBI','OTP','PAN','PDF','FD','RD','DP','BO','ID']:
   text=re.sub(r'\b'+word+r'\b',' '.join(word),text)
  text=text.replace('eSign','e sign').replace('NetBanking','net banking').replace('NetSecure','net secure')
 # Canonical glyphs missing from individual model alphabets; never discard a word.
 if lang in ('hi','mr'):text=text.replace('ॅ','े').replace('ॲ','अ').replace('ऍ','ए').replace('ॉ','ो').replace('ऑ','ओ').replace('ँ','ं').replace('़','').replace('ऋ','रि')
 if lang=='ta':text=text.replace('ஃ','')
 if lang=='ur':text=text.replace('ً','').replace('ِ','')
 return text

def sentences(text):
 return [s.strip() for s in re.split(r'[.!?।؟۔…/;:↗→]+',text) if any(unicodedata.category(c)[0]=='L' for c in s)]

for lang in ([args.language] if args.language else MODEL):
 modeldir=pathlib.Path(args.models)/MODEL[lang];source=json.loads((modeldir/'source.json').read_text())
 revision=hashlib.sha256(json.dumps({'text':PUBLIC[lang],'rules':RULES,'model':source,'generator':2},ensure_ascii=False,sort_keys=True).encode()).hexdigest()[:12]
 out=ROOT/'dist/audio'/lang/revision;out.mkdir(parents=True,exist_ok=True)
 model=VitsModel.from_pretrained(str(modeldir),local_files_only=True)
 tokenizer=AutoTokenizer.from_pretrained(str(modeldir),local_files_only=True)
 vocabulary=set(tokenizer.get_vocab());entries={};start=time.time()
 previous_path=ROOT/'audio'/('recordings-'+lang+'.json')
 previous=json.loads(previous_path.read_text()) if previous_path.exists() else {}
 prior_entries=previous.get('entries',{}) if previous.get('revision')==revision else {}
 rows=list(PUBLIC[lang].items()); rows=rows[:args.limit] if args.limit else rows
 for idx,(key,text) in enumerate(rows):
  spoken=normalize(text,lang);target=out/(key+'.mp3');meta=out/(key+'.json')
  if target.exists():
   existing=json.loads(meta.read_text()) if meta.exists() else prior_entries.get(key)
   if existing and existing['sha256']==hashlib.sha256(target.read_bytes()).hexdigest():entries[key]=existing;continue
  parts=[]
  for n,sentence in enumerate(sentences(spoken)):
   sentence=sentence.lower()
   missing=set(c for c in sentence if unicodedata.category(c)[0] in ('L','M') and c not in vocabulary)
   if missing:raise ValueError(f'{lang}/{key}: unsupported letters {missing!r} in {sentence}')
   # Long passages are split at a word boundary to avoid unstable duration prediction.
   chunks=[]
   while len(sentence)>240:
    at=sentence.rfind(' ',0,240);at=at if at>30 else 240;chunks.append(sentence[:at]);sentence=sentence[at:].strip()
   chunks.append(sentence)
   for chunk in chunks:
    torch.manual_seed(173+n)
    inputs=tokenizer(chunk,return_tensors='pt')
    with torch.inference_mode():samples=model(**inputs).waveform[0].numpy()
    if not np.isfinite(samples).all() or len(samples)==0:raise ValueError('Invalid waveform')
    audible=np.flatnonzero(np.abs(samples)>.003)
    if len(audible)<160:raise ValueError(f'Silent recording {lang}/{key}')
    samples=samples[max(0,audible[0]-1600):audible[-1]+1600]
    parts.extend([samples,np.zeros(4000,dtype=np.float32)])
  samples=np.concatenate(parts);duration=len(samples)/model.config.sampling_rate
  if duration>90:raise ValueError(f'Unexpected duration {lang}/{key}: {duration}')
  with tempfile.NamedTemporaryFile(suffix='.wav') as temp:
   with wave.open(temp.name,'wb') as wav:
    wav.setnchannels(1);wav.setsampwidth(2);wav.setframerate(model.config.sampling_rate);wav.writeframes((np.clip(samples,-1,1)*32767).astype('<i2').tobytes())
   subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-y','-i',temp.name,'-af','loudnorm=I=-19:TP=-2:LRA=7','-ar','24000','-ac','1','-codec:a','libmp3lame','-b:a','32k','-metadata','artist=Virasat; speech model: Meta AI MMS','-metadata','copyright=Non-commercial; model CC-BY-NC-4.0','-metadata','title='+key,str(target)],check=True)
  data={'textHash':hashlib.sha256(text.encode()).hexdigest(),'spoken':spoken,'bytes':target.stat().st_size,'seconds':round(duration,3),'sha256':hashlib.sha256(target.read_bytes()).hexdigest()}
  meta.write_text(json.dumps(data,ensure_ascii=False));entries[key]=data
  if idx%25==0:print(lang,idx+1,'/',len(rows),'elapsed',round(time.time()-start),flush=True)
 report={'language':lang,'revision':revision,'model':source,'license':'CC-BY-NC-4.0','fluentReview':False,'entries':entries}
 (ROOT/'audio'/('recordings-'+lang+'.json')).write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
 print(lang,'READY',len(entries),'bytes',sum(e['bytes'] for e in entries.values()),'seconds',round(sum(e['seconds'] for e in entries.values())),flush=True)
