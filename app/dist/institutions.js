// A searchable starting list, not a registry or a claim of institutional integration.
// Names identify the institution; guide coverage is determined separately in guides.js.
const rows = {
  bank: [
    ['hdfc-bank','HDFC Bank','hdfc एचडीएफसी एचडीएफसी बैंक এইচডিএফসি எச்டிஎஃப்சி ایچ ڈی ایف سی'],
    ['sbi','State Bank of India','sbi state bank एसबीआई स्टेट बैंक भारतीय स्टेट बैंक এসবিআই স্টেট ব্যাংক எஸ்பிஐ اسٹیٹ بینک'],
    ['icici-bank','ICICI Bank','icici आईसीआईसीआई আইসিআইসিআই ஐசிஐசிஐ آئی سی آئی سی آئی'],
    ['axis-bank','Axis Bank','axis एक्सिस অ্যাক্সিস ஆக்சிஸ் ایکسس'],
    ['pnb','Punjab National Bank','pnb पीएनबी पंजाब नेशनल পাঞ্জাব ন্যাশনাল பஞ்சாப் پنجاب نیشنل'],
    ['bank-of-baroda','Bank of Baroda','bob बड़ौदा बडोदा বরোদা பரோடா بڑودہ'],
    ['canara-bank','Canara Bank','canara केनरा কানাড়া கனரா کینرا'],
    ['union-bank','Union Bank of India','union यूनियन ইউনিয়ন யூனியன் یونین'],
    ['bank-of-india','Bank of India','boi बैंक ऑफ इंडिया ব্যাঙ্ক অফ ইন্ডিয়া பேங்க் ஆஃப் இந்தியா'],
    ['bank-of-maharashtra','Bank of Maharashtra','bom महाराष्ट्र মহারাষ্ট্র மகாராஷ்டிரா'],
    ['central-bank','Central Bank of India','cbi सेंट्रल সেন্ট্রাল சென்ட்ரல்'],
    ['indian-bank','Indian Bank','इंडियन इंडियन बँक ইন্ডিয়ান இந்தியன் انڈین'],
    ['iob','Indian Overseas Bank','iob इंडियन ओवरसीज இந்தியன் ஓவர்சீஸ்'],
    ['uco','UCO Bank','यूको ইউকো யூகோ'],
    ['punjab-sind','Punjab & Sind Bank','psb punjab sind पंजाब सिंध'],
    ['kotak','Kotak Mahindra Bank','kotak कोटक কোটাক கோட்டக் کوٹک'],
    ['idfc','IDFC FIRST Bank','idfc आईडीएफसी ஐடிஎஃப்சி'],
    ['indusind','IndusInd Bank','indusind इंडसइंड'],
    ['yes','YES Bank','yes यस ইয়েস யெஸ்'],
    ['federal','Federal Bank','federal फेडरल ஃபெடரல்'],
    ['idbi','IDBI Bank','idbi आईडीबीआई আইডিবিআই ஐடிபிஐ'],
    ['rbl','RBL Bank','rbl आरबीएल'],
    ['south-indian','South Indian Bank','south indian साउथ इंडियन சவுத் இந்தியன்'],
    ['karur-vysya','Karur Vysya Bank','kvb करूर वैश्य கரூர் வைஸ்யா'],
    ['karnataka','Karnataka Bank','karnataka कर्नाटक கர்நாடகா'],
    ['city-union','City Union Bank','cub city union सिटी यूनियन சிட்டி யூனியன்'],
    ['dcb','DCB Bank','dcb डीसीबी'],
    ['dhanlaxmi','Dhanlaxmi Bank','dhanlaxmi धनलक्ष्मी'],
    ['jammu-kashmir','Jammu & Kashmir Bank','jk j&k जम्मू कश्मीर'],
    ['tmb','Tamilnad Mercantile Bank','tmb tamilnad தமிழ்நாடு மெர்க்கன்டைல்'],
    ['au','AU Small Finance Bank','au एयू'],
    ['ujjivan','Ujjivan Small Finance Bank','ujjivan उज्जीवन'],
    ['equitas','Equitas Small Finance Bank','equitas इक्विटास ஈக்விடாஸ்'],
    ['hsbc','HSBC India','hsbc एचएसबीसी'],
    ['standard-chartered','Standard Chartered Bank','scb standard chartered स्टैंडर्ड चार्टर्ड'],
    ['dbs','DBS Bank India','dbs डीबीएस']
  ],
  demat: [
    ['zerodha','Zerodha','kite coin जेरोधा ज़ेरोधा জেরোধা ஜெரோதா زیرودھا'],
    ['groww','Groww','grow ग्रो গ্রো க்ரோ'],['angel','Angel One','angel broking एंजेल অ্যাঞ্জেল ஏஞ்சல்'],
    ['upstox','Upstox','rk sv अपस्टॉक्स அப்ஸ்டாக்ஸ்'],['icici-direct','ICICI Direct','icici securities आईसीआईसीआई'],
    ['hdfc-securities','HDFC Securities','hdfc sky एचडीएफसी सिक्योरिटीज'],['kotak-securities','Kotak Securities','kotak neo कोटक'],
    ['motilal','Motilal Oswal','motilal मोतीलाल'],['sbi-securities','SBI Securities','sbicap एसबीआई सिक्योरिटीज'],
    ['5paisa','5paisa','5 paisa five paisa पांच पैसा'],['iifl','IIFL Securities','iifl आईआईएफएल'],
    ['dhan','Dhan','धन ধন தன்'],['geojit','Geojit','geojit जियोजित'],['sharekhan','Sharekhan','sharekhan शेयरखान']
  ],
  mf: [
    ['hdfc-mf','HDFC Mutual Fund','hdfc एचडीएफसी এইচডিএফসি எச்டிஎஃப்சி ایچ ڈی ایف سی'],
    ['sbi-mf','SBI Mutual Fund','sbi एसबीआई এসবিআই எஸ்பிஐ'],['icici-mf','ICICI Prudential Mutual Fund','icici prudential आईसीआईसीआई'],
    ['axis-mf','Axis Mutual Fund','axis एक्सिस অ্যাক্সিস ஆக்சிஸ்'],['kotak-mf','Kotak Mahindra Mutual Fund','kotak कोटक'],
    ['nippon-mf','Nippon India Mutual Fund','nippon reliance निप्पॉन रिलायंस'],['aditya-mf','Aditya Birla Sun Life Mutual Fund','absl aditya birla आदित्य बिरला'],
    ['uti-mf','UTI Mutual Fund','uti यूटीआई'],['dsp-mf','DSP Mutual Fund','dsp डीएसपी'],['tata-mf','Tata Mutual Fund','tata टाटा টাটা டாடா'],
    ['mirae-mf','Mirae Asset Mutual Fund','mirae मिराए'],['ppfas','PPFAS Mutual Fund','parag parikh ppfas पराग पारिख'],
    ['franklin-mf','Franklin Templeton Mutual Fund','franklin फ्रैंकलिन'],['hsbc-mf','HSBC Mutual Fund','hsbc l&t एचएसबीसी'],
    ['quant-mf','quant Mutual Fund','quant क्वांट'],['quantum-mf','Quantum Mutual Fund','quantum क्वांटम'],
    ['bandhan-mf','Bandhan Mutual Fund','bandhan idfc बंधन বন্ধন'],['edelweiss-mf','Edelweiss Mutual Fund','edelweiss एडलवाइस'],
    ['motilal-mf','Motilal Oswal Mutual Fund','motilal मोतीलाल'],['canara-mf','Canara Robeco Mutual Fund','canara robeco केनरा'],
    ['invesco-mf','Invesco Mutual Fund','invesco इन्वेस्को'],['sundaram-mf','Sundaram Mutual Fund','sundaram सुंदरम சுந்தரம்'],
    ['lic-mf','LIC Mutual Fund','lic एलआईसी'],['union-mf','Union Mutual Fund','union यूनियन'],['bajaj-mf','Bajaj Finserv Mutual Fund','bajaj बजाज']
  ]
};
export const INSTITUTIONS=Object.entries(rows).flatMap(([type,items])=>items.map(([id,name,aliases])=>({id,name,type,aliases})));
export function normalise(value){return String(value).normalize('NFKC').toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();}
export function institutionById(id){return INSTITUTIONS.find(item=>item.id===id);}
export function matchInstitution(type,value){const q=normalise(value).replace(/\s/g,'');return INSTITUTIONS.find(item=>item.type===type&&[item.name,item.id,...item.aliases.split(' ')].some(s=>normalise(s).replace(/\s/g,'')===q));}
export function searchInstitutions(type,value,limit=8){const terms=normalise(value).split(' ').filter(Boolean);return INSTITUTIONS.filter(item=>item.type===type&&terms.every(term=>normalise(item.name+' '+item.aliases).includes(term))).sort((a,b)=>{const q=normalise(value);return Number(normalise(b.name).startsWith(q))-Number(normalise(a.name).startsWith(q))||a.name.localeCompare(b.name);}).slice(0,limit);}
