import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=path.resolve('dist');
const pages=JSON.parse(fs.readFileSync('dist/js/pages.json','utf8'));
const counts=Object.fromEntries(['main','family','product','service'].map(type=>[type,pages.filter(p=>p.type===type).length]));
assert.deepEqual(counts,{main:5,family:0,product:0,service:0});
assert.equal(new Set(pages.map(p=>p.url)).size,pages.length,'Page URLs must be unique');
let checked=0;
for(const {url:route} of pages){
 const html=fs.readFileSync(path.join(root,route),'utf8');
 assert.equal((html.match(/<h1>/g)||[]).length,1,`${route}: one h1`);
 assert(html.includes('name="viewport"'),`${route}: viewport`);
 assert(!/98765|info@iecs|Baner Business|assets\/trash|images\/products/.test(html),`${route}: no retired contacts or imagery`);
 for(const m of html.matchAll(/(?:src|href)="([^"]+)"/g)){
  const url=m[1].replaceAll('&amp;','&');
  if(/^(https?:|mailto:|tel:|data:)/.test(url))continue;
  const target=new URL(url,new URL(route,'https://iecs.example/'));
  const file=path.resolve(root,'.'+decodeURIComponent(target.pathname));
  assert(file.startsWith(root+path.sep),`${route}: link must stay inside build`);
  assert(fs.existsSync(file),`${route}: missing ${url}`);
  if(target.hash&&path.extname(file)==='.html'){
   const dest=file===path.join(root,route)?html:fs.readFileSync(file,'utf8');
   assert(dest.includes(`id="${decodeURIComponent(target.hash.slice(1))}"`),`${route}: missing anchor ${url}`);
  }
  checked++;
 }
}
const contact=fs.readFileSync(path.join(root,'contact.html'),'utf8');
assert(!/<(?:form|input|textarea|select)\b|brief-result|enquiry-form/.test(contact),'Contact page must not contain the removed form');
assert(contact.includes('contact-details-title'),'Contact details must be present');
const catalog=JSON.parse(fs.readFileSync('dist/js/catalog.json','utf8'));
const equipment=JSON.parse(fs.readFileSync('config/equipment.json','utf8'));
assert.deepEqual(catalog,equipment,'Published equipment must match the current client-aligned source');
assert.equal(catalog.length,6);
const serviceGroups=JSON.parse(fs.readFileSync('config/services.json','utf8'));
assert.equal(serviceGroups.length,6);
const servicePage=fs.readFileSync(path.join(root,'services.html'),'utf8');
assert.equal((servicePage.match(/<details>/g)||[]).length,serviceGroups.flatMap(g=>g.items).length);
const {contact:details}=JSON.parse(fs.readFileSync('config/site.json','utf8'));
assert.equal(details.isPlaceholder,false);
assert(contact.includes('mailto:'+details.email));
assert(contact.includes('tel:'+details.phone.replace(/[^+0-9]/g,'')));
assert(contact.includes(details.name)&&contact.includes(details.address)&&contact.includes(details.gstin));
assert(contact.includes(encodeURIComponent(details.address)),'Map must search the supplied address');
for(const file of [...pages.map(p=>p.url),'js/catalog.json']){
 const published=fs.readFileSync(path.join(root,file),'utf8');
 assert(!/SCADA|[Rr]obotic|hello@iecs|00000|Preview placeholders|ESD.safe|[Gg]enuine spares/.test(published),file+': unsupported claims and preview details removed');
}
for(const f of catalog){
 assert(fs.existsSync(`dist/assets/generated/${f.image}.webp`));
 for(const v of f.variants){
  if(v.image)assert(fs.existsSync(path.join(root,v.image)),`${v.name}: missing concept image`);
 }
}
assert.equal(fs.readdirSync('assets/trash/products-old-images').length,35);
assert(!fs.existsSync('dist/assets/trash'));
for(const folder of ['products','services']){assert(!fs.existsSync(folder),`${folder}: removed page directory must stay absent`);assert(!fs.existsSync(path.join(root,folder)),`${folder}: removed pages must not be deployed`);}
const css=fs.readFileSync('css/site.css','utf8');assert(css.includes('prefers-reduced-motion'));assert(css.includes('background:#fff'));
console.log(`Static checks passed: ${pages.length} pages, ${checked} links/assets, 6 equipment groups, 23 documented services, all anchors resolved, archived assets excluded.`);
