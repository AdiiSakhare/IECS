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
const catalog=JSON.parse(fs.readFileSync('dist/js/catalog.json','utf8'));
assert.equal(catalog.length,5);assert.equal(catalog.flatMap(f=>f.variants).length,34);
for(const f of catalog){
 assert(fs.existsSync(`dist/assets/generated/${f.image}.webp`));
 for(const v of f.variants){
  assert(v.image,`${v.name}: missing image mapping`);
  assert(fs.existsSync(path.join(root,v.image)),`${v.name}: missing recreated image`);
 }
}
assert.equal(fs.readdirSync('assets/trash/products-old-images').length,35);
assert(!fs.existsSync('dist/assets/trash'));
for(const folder of ['products','services']){assert(!fs.existsSync(folder),`${folder}: removed page directory must stay absent`);assert(!fs.existsSync(path.join(root,folder)),`${folder}: removed pages must not be deployed`);}
const css=fs.readFileSync('css/site.css','utf8');assert(css.includes('prefers-reduced-motion'));assert(css.includes('background:#fff'));
console.log(`Static checks passed: ${pages.length} pages, ${checked} links/assets, 34 recreated products, all anchors resolved, archived assets excluded.`);
