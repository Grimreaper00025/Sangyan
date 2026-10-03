import {writeFile,mkdir} from 'node:fs/promises';
import {dictionaries} from '../dist/i18n.js';
// Installation guidance belongs to the retired device-voice implementation.
const exclude=new Set(['voiceSetup','voiceSetupHelp','androidVoice','appleVoice','voiceFallback','refreshVoices','chooseVoice']);
const text=Object.fromEntries(Object.entries(dictionaries).map(([lang,copy])=>[lang,Object.fromEntries(Object.entries(copy).filter(([key])=>!exclude.has(key)))]));
await mkdir(new URL('../audio/',import.meta.url),{recursive:true});
await writeFile(new URL('../audio/public-text.json',import.meta.url),JSON.stringify(text,null,2)+'\n');
console.log('Exported public dictionary only. No user input is accepted.');
