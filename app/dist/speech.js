// Only device-local voices and explicitly marked guidance are read aloud.
export const LOCALES={en:'en-IN',hi:'hi-IN',bn:'bn-IN',mr:'mr-IN',ta:'ta-IN',ur:'ur-IN'};
const normalLocale=value=>String(value||'').toLowerCase().replaceAll('_','-');
export function matchingVoices(voices,language){
 const locale=normalLocale(LOCALES[language]);
 if(!locale)return [];
 return voices.filter(v=>v.localService&&normalLocale(v.lang).split('-')[0]===language)
  .sort((a,b)=>Number(normalLocale(b.lang)===locale)-Number(normalLocale(a.lang)===locale)||Number(b.default)-Number(a.default)||a.name.localeCompare(b.name));
}
export function splitSpeech(text){
 const sentences=String(text).replace(/[↗→]/g,', ').replace(/\s+/g,' ').trim().match(/[^.!?।؟]+[.!?।؟]*/gu)||[];
 return sentences.flatMap(sentence=>{const pieces=[];let rest=sentence.trim();while(rest.length>220){let at=rest.lastIndexOf(' ',220);if(at<60)at=220;pieces.push(rest.slice(0,at));rest=rest.slice(at).trim();}if(rest)pieces.push(rest);return pieces;});
}
export function createReader({synth=globalThis.speechSynthesis,Utterance=globalThis.SpeechSynthesisUtterance,onChange=()=>{}}={}){
 let queue=[],index=0,token=0,state='idle',voice=null,language='en',rate=0.9,active=null;
 const update=(next,error='')=>{state=next;onChange({state,index,total:queue.length,text:queue[index]?.text||'',source:queue[index]?.source??null,error});};
 const cancel=()=>{const paused=state==='paused'||synth?.paused;token++;synth?.cancel();if(paused)synth?.resume?.();active=null;};
 const stop=()=>{cancel();queue=[];index=0;update('idle');};
 function speakNext(session){
  if(session!==token)return;
  if(index>=queue.length){active=null;update('finished');return;}
  active=new Utterance(queue[index].text);active.voice=voice;active.lang=voice.lang||LOCALES[language];active.rate=rate;active.pitch=1;
  active.onend=()=>{if(session!==token)return;index++;speakNext(session);};
  active.onerror=e=>{if(session!==token||['canceled','interrupted'].includes(e.error))return;cancel();update('error',e.error);};
  update('playing');synth.speak(active);
 }
 function move(offset){if(!queue.length||!['playing','paused','finished'].includes(state))return;cancel();index=Math.max(0,Math.min(queue.length-1,index+offset));speakNext(token);}
 return {
  stop,
  voices:lang=>matchingVoices(synth?.getVoices?.()||[],lang),
  start(text,options={}){
   stop();language=options.language||'en';const available=matchingVoices(synth?.getVoices?.()||[],language);
   voice=available.find(v=>options.voice?.localService&&v.name===options.voice.name&&normalLocale(v.lang)===normalLocale(options.voice.lang))||available[0];rate=[.75,.9,1.05].includes(options.rate)?options.rate:.9;
   if(!synth||!Utterance||!voice){update('unavailable');return false;}
   const blocks=Array.isArray(text)?text:[{text}];queue=blocks.flatMap(block=>splitSpeech(block.text).map(text=>({text,source:block.source??null})));
   if(!queue.length){update('finished');return false;}speakNext(token);return true;
  },
  pause(){if(state==='playing'){synth.pause();update('paused');}},
  resume(){if(state==='paused'){synth.resume();update('playing');}},
  previous(){move(-1);},repeat(){move(0);},next(){move(1);},
  get state(){return state;}
 };
}
