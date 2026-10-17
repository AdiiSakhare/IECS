import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const {chromium}=await import(process.env.PLAYWRIGHT_MODULE||'playwright');
const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox']});
const page=await browser.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:1});
const base=process.env.PREVIEW_URL||'http://127.0.0.1:4173/';
const pages=JSON.parse(fs.readFileSync(path.join(root,'dist/js/pages.json'),'utf8'));
const errors=[];const results=[];
page.on('pageerror',e=>errors.push(e.message));
page.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`);});
const representatives=['index.html','products.html','services.html','about.html','contact.html'];
fs.mkdirSync(path.join(root,'artifacts'),{recursive:true});
try{
 for(const width of (process.argv.includes('--flows-only')?[]:[320,390,768,1440])){
  await page.setViewportSize({width,height:900});
  for(const entry of pages){
   await page.goto(new URL(entry.url,base).href,{waitUntil:'load'});
   await page.evaluate(()=>document.fonts.ready);
   assert.equal(await page.locator('h1').count(),1,entry.url);
   const layout=await page.evaluate(()=>({width:document.documentElement.scrollWidth,viewport:innerWidth,bg:getComputedStyle(document.body).backgroundColor}));
   assert(layout.width<=layout.viewport,`${entry.url} at ${width}px: overflow ${layout.width}`);
   assert.equal(layout.bg,'rgb(255, 255, 255)',entry.url);
   assert.equal(await page.locator('a.skip').getAttribute('href'),'#main');
   if(representatives.includes(entry.url)&&(width===390||width===1440)){
    for(const img of await page.locator('main img').all()){await img.scrollIntoViewIfNeeded();await img.evaluate(el=>el.decode());}
    await page.evaluate(()=>scrollTo(0,0));await page.waitForTimeout(150);
    await page.screenshot({path:path.join(root,'artifacts',entry.url.replaceAll('/','-').replace('.html',`-${width}.png`)),fullPage:true});
   }
  }
  const result=`All ${pages.length} pages at ${width}px: loaded, pure white background, one heading, no horizontal overflow`;
  results.push(result);console.log(result);
 }
 await page.goto(new URL('products.html',base).href);
 const catalog=JSON.parse(fs.readFileSync(path.join(root,'dist/js/catalog.json'),'utf8'));
 for(const family of catalog){
  await page.locator(`[data-filter="${family.id}"]`).click();
  assert.equal(await page.locator('.catalog-grid .product-card:visible').count(),1);
  await page.locator(`[data-product="${family.id}"]`).click();
  await page.waitForSelector('dialog[open]');
  assert.equal(await page.locator('#dialog-title').textContent(),family.name);
  assert.equal(await page.locator('.variant').count(),family.variants.length);
  await page.locator('.dialog-close').click();
 }
 results.push('All six equipment filters and capability dialogs passed');
 await page.setViewportSize({width:390,height:844});
 await page.goto(new URL('products.html',base).href);
 await page.locator('[data-filter="testing"]').click();assert.equal(await page.locator('.catalog-grid .product-card:visible').count(),1);
 await page.locator('[data-product="testing"]').click();await page.waitForSelector('dialog[open]');assert.equal(await page.locator('.variant').count(),3);
 await page.keyboard.press('Escape');await page.waitForFunction(()=>document.activeElement===document.querySelector('[data-product="testing"]'));
 await page.locator('.catalog-grid .product-open:visible').click();await page.waitForSelector('dialog[open]');
 await page.locator('.variant .text-link').first().click();assert(page.url().endsWith('/contact.html'));assert.equal(await page.locator('form,input,select,textarea').count(),0);assert(await page.locator('#contact-details-title').isVisible());
 assert.equal(await page.locator('.contact-directory a[href^="tel:"]').getAttribute('href'),'tel:+919527380281');
 assert.equal(await page.locator('.contact-directory a[href^="mailto:"]').getAttribute('href'),'mailto:iecs.control@gmail.com');
 results.push('Catalogue → product dialog → contact details passed; form absent; dialog focus restoration passed');
 await page.goto(new URL('services.html',base).href);await page.locator('summary').first().click();assert.equal(await page.locator('details').count(),23);
 await page.locator('.menu-toggle').click();await page.keyboard.press('Escape');assert.equal(await page.locator('.menu-toggle').getAttribute('aria-expanded'),'false');assert(await page.locator('.menu-toggle').evaluate(el=>el===document.activeElement));
 await page.getByRole('link',{name:'Discuss your requirement'}).first().click();assert(page.url().endsWith('/contact.html'));assert(await page.locator('#contact-details-title').isVisible());
 results.push('Services accordion → contact details passed; mobile menu Escape and focus restoration passed');
 await page.goto(new URL('products.html',base).href);await page.emulateMedia({reducedMotion:'reduce'});assert.equal(await page.locator('html').evaluate(el=>getComputedStyle(el).scrollBehavior),'auto');
 results.push('Reduced-motion preference respected');
 assert.deepEqual(errors,[],'No browser errors or failed asset requests');results.push('No JavaScript errors or failed asset requests');
 fs.writeFileSync(path.join(root,'artifacts/main-pages-browser-results.json'),JSON.stringify(results,null,2));
 console.log(results.join('\n'));
}finally{await browser.close();}
