// The 22 Eighth Schedule languages, plus English. Text packs load only on demand.
export const languageInfo=[
 ['en','English','English'],['hi','हिन्दी','Hindi'],['as','অসমীয়া','Assamese'],
 ['bn','বাংলা','Bengali'],['brx','बड़ो','Bodo'],['doi','डोगरी','Dogri'],
 ['gu','ગુજરાતી','Gujarati'],['kn','ಕನ್ನಡ','Kannada'],['ks','کٲشُر','Kashmiri'],
 ['kok','कोंकणी','Konkani'],['mai','मैथिली','Maithili'],['ml','മലയാളം','Malayalam'],
 ['mni','ꯃꯤꯇꯩꯂꯣꯟ','Manipuri · Meitei'],['mr','मराठी','Marathi'],['ne','नेपाली','Nepali'],
 ['or','ଓଡ଼ିଆ','Odia'],['pa','ਪੰਜਾਬੀ','Punjabi'],['sa','संस्कृतम्','Sanskrit'],
 ['sat','ᱥᱟᱱᱛᱟᱲᱤ','Santali'],['sd','سنڌي','Sindhi'],['ta','தமிழ்','Tamil'],
 ['te','తెలుగు','Telugu'],['ur','اردو','Urdu']
];
export const audioLanguages=['en','hi','bn','mr','ta','ur'];
export const isRTL=language=>['ur','ks','sd'].includes(language);
export const isKnownLanguage=language=>languageInfo.some(([code])=>code===language);
