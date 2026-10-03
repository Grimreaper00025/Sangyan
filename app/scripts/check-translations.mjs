// Build-time structural checks. These do not certify linguistic or legal accuracy.
import {readFile} from 'node:fs/promises';
import {gzipSync} from 'node:zlib';
import {languageInfo,audioLanguages} from '../dist/languages.js';
import {dictionaries} from './dictionaries.mjs';
const baseline=JSON.parse(await readFile(new URL('../translations/en.json',import.meta.url),'utf8'));
const required=[...Object.keys(baseline),'searchLanguages','translationDraft','textOnly','audioAvailable','noLanguages'];
const report=[];
for(const [code,nativeName,name] of languageInfo){
 const d=dictionaries[code];if(!d)throw Error(`Missing language ${code}`);
 const missing=required.filter(key=>typeof d[key]!=='string'||!d[key].trim());
 if(missing.length)throw Error(`Missing ${code}: ${missing.join(', ')}`);
 const artifacts=Object.entries(d).filter(([,value])=>(/^\s*\[\d{3}\]/.test(value)||/^\s*[०-९]+[.।]\s*\n/u.test(value))||value.includes('\ufffd'));
 if(artifacts.length)throw Error(`Suspicious encoding/translation markers ${code}: ${artifacts.map(([k])=>k).join(', ')}`);
 const gzipBytes=gzipSync(JSON.stringify(d)).length;if(gzipBytes>16000)throw Error(`Language pack exceeds 16 KB budget: ${code} ${gzipBytes}`);
 report.push({code,name,nativeName,keys:Object.keys(d).length,gzipBytes,audio:audioLanguages.includes(code),humanReviewed:false,unchangedEnglish:Object.keys(baseline).filter(key=>d[key]===baseline[key]).length});
}
console.log(JSON.stringify({note:'Structural completeness only. Unchanged names/numbers can be intentional; fluent review is still required.',languages:report},null,2));
