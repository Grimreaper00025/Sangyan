// Only public application files and audio are cached. No form values, files or API calls.
const SHELL='virasat-shell-audio-20261003-r1', AUDIO='virasat-audio-v1';
const FILES=['/','/index.html','/styles.css','/favicon.svg','/main.js','/i18n.js','/virasat-copy.js','/journey-copy.js','/audio-copy.js','/tracker.js','/institutions.js','/guides.js','/privacy.js','/speech.js','/audio-catalog.js','/audio-credits.html'];
const MAX_AUDIO_BYTES=12*1024*1024, MAX_AUDIO_ENTRIES=256;
self.addEventListener('install',event=>event.waitUntil(caches.open(SHELL).then(cache=>cache.addAll(FILES))));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('virasat-shell-')&&key!==SHELL)await caches.delete(key);await self.clients.claim();})()));
let storageWork=Promise.resolve();
function retainAudio(url,response){
 storageWork=storageWork.catch(()=>{}).then(async()=>{
  const data=await response.arrayBuffer();if(data.byteLength>MAX_AUDIO_BYTES)return;
  const cache=await caches.open(AUDIO),headers=new Headers(response.headers);headers.set('Content-Length',String(data.byteLength));
  await cache.put(url,new Response(data,{status:200,headers}));
  const keys=await cache.keys();let bytes=0;for(const key of [...keys].reverse()){
   const stored=await cache.match(key);bytes+=Number(stored?.headers.get('Content-Length')||MAX_AUDIO_BYTES);
   if(bytes>MAX_AUDIO_BYTES||keys.indexOf(key)<keys.length-MAX_AUDIO_ENTRIES)await cache.delete(key);
  }
 });
 return storageWork.catch(()=>{}); // Storage restrictions must never prevent listening.
}
async function audioResponse(request,event){
 const url=new URL(request.url),cache=await caches.open(AUDIO);
 let response=await cache.match(url.href);
 if(!response){response=await fetch(new Request(url.href,{credentials:'omit'}));if(!response.ok)return response;event.waitUntil(retainAudio(url.href,response.clone()));}
 const range=request.headers.get('Range');if(!range)return response;
 const data=await response.arrayBuffer(),match=/^bytes=(\d*)-(\d*)$/.exec(range);
 if(!match)return new Response(null,{status:416,headers:{'Content-Range':`bytes */${data.byteLength}`}});
 const start=match[1]?Number(match[1]):Math.max(0,data.byteLength-Number(match[2])),end=match[1]&&match[2]?Math.min(Number(match[2]),data.byteLength-1):data.byteLength-1;
 if(start>end||start>=data.byteLength)return new Response(null,{status:416,headers:{'Content-Range':`bytes */${data.byteLength}`}});
 const headers=new Headers(response.headers);headers.set('Content-Range',`bytes ${start}-${end}/${data.byteLength}`);headers.set('Accept-Ranges','bytes');headers.set('Content-Length',String(end-start+1));
 return new Response(data.slice(start,end+1),{status:206,headers});
}
self.addEventListener('fetch',event=>{
 const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin||url.search)return;
 if(/^\/audio\/(en|hi|bn|mr|ta|ur)\/[a-f0-9]{12}\/[a-zA-Z0-9]+\.mp3$/.test(url.pathname)){
  event.respondWith(audioResponse(event.request,event).catch(()=>fetch(event.request)));return;
 }
 if(FILES.includes(url.pathname)||/^\/(en|hi|bn|mr|ta|ur)\/?$/.test(url.pathname)){
  // One version of the public shell per worker prevents mixing incompatible releases offline.
  const key=event.request.mode==='navigate'?'/index.html':url.pathname;
  event.respondWith(caches.open(SHELL).then(async cache=>(await cache.match(key))||fetch(event.request)));
 }
});
