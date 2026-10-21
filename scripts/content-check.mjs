import fs from 'node:fs';
import assert from 'node:assert/strict';

// Transcribed from the client's 20-item "Our Key Services" image, in reading order.
// Alternatives allow natural wording while requiring each distinct capability.
const requirements = [
 ['New manufacturing process design and development', 'automation', ['manufacturing process', 'design', 'develop']],
 ['Low-cost industrial automation', 'automation', ['low-cost|low cost', 'automation']],
 ['Special-purpose machine design and development', 'machines', ['special-purpose|special purpose', 'design', 'develop']],
 ['Engineering controls for assembly processes', 'automation', ['assembly', 'control']],
 ['Process-parameter traceability', 'testing', ['process parameters', 'traceability|tracking']],
 ['Prototyping and sample development', 'machines', ['prototype|prototyping', 'sample', 'develop']],
 ['End-of-line testing machine development', 'testing', ['end-of-line', 'testing', 'machines', 'develop']],
 ['New machine installation and commissioning', 'support', ['new machines', 'installation', 'commissioning']],
 ['Mechanical tools and fixtures', 'machines', ['mechanical tools|mechanical tooling', 'fixtures', 'design', 'develop']],
 ['Hydraulic and pneumatic system controls', 'electrical', ['hydraulic', 'pneumatic', 'control', 'design', 'develop']],
 ['Process control panels and electrical panel wiring', 'electrical', ['process control panels', 'electrical', 'wiring']],
 ['LT and HT electrical panel design and development', 'electrical', ['lt', 'ht', 'panels', 'design', 'develop']],
 ['Assembly line setup with special tools', 'production', ['assembly line', 'setup', 'special tools|special tooling']],
 ['Assembly conveyor setup with Poka-Yoke', 'production', ['conveyor', 'setup', 'poka-yoke', 'assembly']],
 ['Barcode scanning systems', 'testing', ['barcode', 'scanning']],
 ['Machinery safety interlocks', 'production', ['machinery safety', 'interlocks']],
 ['Custom machinery design, building and assembly', 'machines', ['custom machines|custom machinery', 'design', 'building|build', 'assembly|assemble']],
 ['Special storage trolleys and racks', 'production', ['special trolleys', 'racks', 'design', 'build']],
 ['Annual maintenance for plant equipment', 'support', ['annual', 'maintenance', 'plant equipment']],
 ['Manufacturing setup shifting and relocation', 'support', ['manufacturing setups', 'relocation|relocating', 'shifting|relocat']]
];
const html=fs.readFileSync('dist/services.html','utf8');
const normalize=s=>s.replace(/&amp;/g,'&').replace(/&#39;|&apos;/g,"'").replace(/&quot;/g,'"').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').toLowerCase();
const sections=Object.fromEntries([...html.matchAll(/<section class="service-group" id="([^"]+)">([\s\S]*?)<\/section>/g)].map(([,id,body])=>[id,body]));
const report=requirements.map(([service,group,terms],i)=>{
 const details=[...(sections[group]||'').matchAll(/<details>([\s\S]*?)<\/details>/g)].map(m=>m[1]);
 const match=details.find(body=>terms.every(term=>term.split('|').some(t=>normalize(body).includes(t))));
 assert(match,`${i+1}. Missing client service: ${service}`);
 assert(match.includes('href="contact.html"'),`${service}: an enquiry path is required`);
 return {number:i+1,service,url:`services.html#${group}`,status:'covered'};
});
const pages=['index','about','services','products','contact'];
for(const page of pages){
 const published=fs.readFileSync(`dist/${page}.html`,'utf8');
 assert(published.includes('tel:+919527380281')&&published.includes('mailto:iecs.control@gmail.com'),`${page}: client contact actions`);
 assert(!/\b(?:guaranteed|zero defects|100% safe|responds fast|on-time delivery|trusted by)\b/i.test(normalize(published)),`${page}: unsupported performance or endorsement claim`);
}
fs.mkdirSync('artifacts',{recursive:true});
fs.writeFileSync('artifacts/service-coverage.json',JSON.stringify(report,null,2)+'\n');
console.log(`Content audit passed: ${report.length}/20 client services explicitly covered in published service details, each with an enquiry path; contact and unsupported-claim checks passed across all 5 pages.`);
