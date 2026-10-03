import test from 'node:test';
import assert from 'node:assert/strict';
import {coachRoute,createNominationCoach,FIELD_GUIDE,COACH_SOURCE} from '../dist/nomination-coach.js';
const act=(c,action,value='')=>c.handle({closest:()=>({dataset:{coachAction:action,coachValue:String(value)}})});
test('coach separates bank, folio, demat-held funds, unknown context and deceased claims',()=>{
 assert.equal(coachRoute({type:'bank'}),'bank');assert.equal(coachRoute({type:'mf',mfMode:'folio'}),'securities');assert.equal(coachRoute({type:'mf',mfMode:'demat'}),'demat-linked');assert.equal(coachRoute({type:'mf',mfMode:'unknown'}),'unknown');assert.equal(coachRoute({type:'demat',holderDeceased:true}),'deceased');
 const c=createNominationCoach();act(c,'step',1);for(const a of [{type:'bank'},{type:'mf',mfMode:'unknown'},{type:'mf',mfMode:'demat'}])assert.doesNotMatch(c.render(a),/These are mandatory nominee particulars/);
});
test('practice distinguishes request receipt from confirmed nomination without changing frozen account',()=>{
 const a=Object.freeze({type:'demat',holding:'sole',review:'reported',nomination:'unknown'}),c=createNominationCoach();act(c,'step',4);act(c,'outcome','done');assert.match(c.render(a),/does not establish registration or rejection/);act(c,'outcome','wait');assert.match(c.render(a),/Correct\. Keep the acknowledgement/);assert.equal(a.nomination,'unknown');assert.equal(a.review,'reported');
});
test('preparation state is temporary, isolated and has no personal-data inputs',()=>{
 const c=createNominationCoach();act(c,'step',3);act(c,'check','form');assert.match(c.render({type:'demat'}),/1 of 4/);act(c,'check','form');assert.match(c.render({type:'demat'}),/0 of 4/);act(c,'check','route');c.reset();act(c,'step',3);assert.match(c.render({type:'demat'}),/0 of 4/);assert.doesNotMatch(c.render({type:'demat'}),/type="(?:text|file|password)"/);
});
test('deceased route stops learning steps and never offers new nomination form',()=>{
 const c=createNominationCoach();act(c,'deceased');const html=c.render({type:'demat'});assert.match(html,/Stop the new-nomination journey/);assert.doesNotMatch(html,/aria-label="Nomination learning steps"/);act(c,'deceased');assert.match(c.render({type:'demat'}),/aria-label="Nomination learning steps"/);
});
test('field guide explains optional particulars and source boundaries',()=>{
 assert.ok(FIELD_GUIDE.every(f=>f.meaning&&f.why&&f.where&&f.check));const c=createNominationCoach();act(c,'step',1);const html=c.render({type:'demat'});assert.match(html,/particulars are optional/);assert.ok(html.includes(COACH_SOURCE));assert.match(html,/English text-only preview/);assert.match(html,/does not verify any institution/);
});
test('invalid actions are rejected and stuck route provides actionable correction guidance',()=>{
 const c=createNominationCoach();assert.equal(act(c,'step',99),false);assert.equal(act(c,'stuck','toString'),false);act(c,'step',5);act(c,'stuck','rejected');assert.match(c.render({type:'demat'}),/exact correction required in writing/);assert.equal(c.handle(null),false);
});
test('fictional rehearsal counts only three correct field choices and never mutates real status',()=>{
 const a=Object.freeze({type:'demat',holding:'sole',review:'reported',nomination:'missing'}),c=createNominationCoach();act(c,'step',2);
 assert.match(c.render(a),/0 of 3 fictional fields understood/);assert.doesNotMatch(c.render(a),/Practice complete\./);
 act(c,'practice-name','tara');act(c,'practice-relationship','mother');act(c,'practice-dob','omit');
 assert.match(c.render(a),/1 of 3 fictional fields understood/);assert.doesNotMatch(c.render(a),/Practice complete\./);
 act(c,'practice-relationship','daughter');act(c,'practice-dob','birth');
 assert.match(c.render(a),/3 of 3 fictional fields understood/);assert.match(c.render(a),/Practice complete\./);assert.match(c.render(a),/not an official submission/);
 assert.equal(a.review,'reported');assert.equal(a.nomination,'missing');assert.doesNotMatch(c.render(a),/type="(?:text|file|password)"/);
 act(c,'practice-dob','today');assert.match(c.render(a),/2 of 3 fictional fields understood/);assert.doesNotMatch(c.render(a),/Practice complete\./);
 assert.equal(act(c,'practice-name','arbitrary personal name'),false);c.reset();act(c,'step',2);assert.match(c.render(a),/0 of 3 fictional fields understood/);
});
test('securities minor field rehearsal is not applied to bank or unidentified fund routes',()=>{
 const c=createNominationCoach();act(c,'step',2);for(const a of [{type:'bank'},{type:'mf',mfMode:'unknown'},{type:'mf',mfMode:'demat'}]){assert.doesNotMatch(c.render(a),/Minor nominee’s date of birth/);assert.doesNotMatch(c.render(a),/data-coach-action="practice-dob"/);}
});
