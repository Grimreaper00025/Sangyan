import {copy as originalCopy} from './virasat-copy.js';
import {journeyCopy} from './journey-copy.js';
const copy={...originalCopy,...journeyCopy};
export const languages=[['en','English'],['hi','हिन्दी'],['bn','বাংলা'],['mr','मराठी'],['ta','தமிழ்'],['ur','اردو']];
export const dictionaries=Object.fromEntries(languages.map(([code],i)=>[code,Object.fromEntries(Object.entries(copy).map(([key,values])=>[key,values[i]]))]));
export const en=dictionaries.en;
export function translate(language,key){return dictionaries[language]?.[key]??dictionaries.en[key]??key;}
