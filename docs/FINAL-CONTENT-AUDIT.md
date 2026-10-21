# Final service and content audit

Reviewed on 21 October 2026. Scope: the five-page site on the existing QA branch (`fee99f8`), brought forward into `dev-branch` before editing. Production `main` remains at `c8b85c0fbd682ab5871eb8446972c3a1a30dd016` and is outside this release.

## Service coverage

The attached client image lists 20 services. All 20 were already covered in the newer QA site, sometimes within a shared service disclosure. The older production source has a different service catalogue; the initial findings from that version do not describe the QA baseline. The current site has 23 disclosures across six groups because its existing client-alignment documentation also records capabilities from two other supplied company sheets. Those additional capabilities have been preserved.

| # | Client image service | Published service disclosure(s) | Section |
| --- | --- | --- | --- |
| 1 | New manufacturing process design and development | Manufacturing Process Development | Automation & Controls |
| 2 | Low-cost industrial automation | Industrial & Low-Cost Automation | Automation & Controls |
| 3 | Special-purpose machine design and development | Special-Purpose & Custom Machines | Machines & Tooling |
| 4 | Engineering controls in assembly processes | Manufacturing Process Development; Assembly Controls & Poka-Yoke | Automation & Controls |
| 5 | Process-parameter traceability | Process & Data Traceability | Testing & Traceability |
| 6 | Prototyping and sample development | Prototyping & Sample Development | Machines & Tooling |
| 7 | End-of-line testing machine development | Testing Setups & EOL Machines | Testing & Traceability |
| 8 | New machine installation and commissioning | Machine Installation & Commissioning | Installation & Plant Support |
| 9 | Mechanical tools and fixtures | Mechanical Tooling & Fixtures | Machines & Tooling |
| 10 | Hydraulic and pneumatic system controls | Hydraulic & Pneumatic Controls | Electrical & Fluid Systems |
| 11 | Process control panels and electrical panel wiring | Control Panels & LT / HT Panels | Electrical & Fluid Systems |
| 12 | LT and HT electrical panel design and development | Control Panels & LT / HT Panels | Electrical & Fluid Systems |
| 13 | Assembly line setup with special tools | Assembly Lines & Conveyors | Production & Material Handling |
| 14 | Assembly conveyor setup with Poka-Yoke | Assembly Lines & Conveyors | Production & Material Handling |
| 15 | Barcode scanning systems | Barcode Scanning Systems | Testing & Traceability |
| 16 | Machinery safety interlocks | Ergonomic Workstations & Safety | Production & Material Handling |
| 17 | Custom machinery design, building and assembly | Special-Purpose & Custom Machines | Machines & Tooling |
| 18 | Special storage trolleys and racks | Storage & Material Handling | Production & Material Handling |
| 19 | Annual maintenance for plant equipment | Annual Plant Maintenance | Installation & Plant Support |
| 20 | Manufacturing setup shifting and relocation | Machine & Plant Relocation | Installation & Plant Support |

`npm run check:content` checks this mapping against the generated service disclosures rather than only the configuration file. It requires the distinct capability terms and a contact link for each brochure requirement, checks the supplied phone/email links across all five pages, and rejects selected unsupported performance and endorsement claims. The machine-readable result is saved to ignored `artifacts/service-coverage.json`.

## Web verification and evidence limits

The client image establishes the requested offering. Existing client-source transcriptions in `config/` and `docs/CLIENT-ALIGNMENT.md` establish the supplied identity, contact details and additional capabilities. Technical reference sources were used to check terminology, not to certify IECS performance or imply a relationship with these organisations.

| Subject | Source checked | Editorial conclusion |
| --- | --- | --- |
| Poka-Yoke | [ASQ: Mistake Proofing](https://asq.org/quality-resources/mistake-proofing) | Explain it as methods that help prevent or detect specific errors; avoid a blanket claim of error-free production. |
| Traceability and barcode data | [GS1: Global Traceability Standard](https://www.gs1.org/standards/gs1-global-traceability-standard/current-standard), [GS1: How does traceability work?](https://support.gs1.org/support/solutions/articles/43000734475-how-does-traceability-work-) | Describe identification and recording/tracking of information. Do not imply barcode scanning alone guarantees complete traceability or GS1 compliance. |
| PLC meaning | [Siemens: SIMATIC S7-1500 PLC](https://www.siemens.com/global/en/products/automation/systems/industrial/plc/simatic-s7-1500.html) | Expand PLC as programmable logic controller. No Siemens partnership or hardware commitment is claimed. |
| End-of-line testing | [NI: Infotainment Test & V2X Systems](https://www.ni.com/en/solutions/transportation/infotainment-test.html) | Expand EOL and describe production checks against defined criteria; do not guarantee defect-free output. |
| Hydraulic and pneumatic motion | [Festo: Actuators and Drives](https://www.festo.com/us/en/c/products/actuators-and-drives-id_pim5) | Describe control requirements and movements without inventing force, pressure or capacity specifications. |
| Guard interlocks | [HSE: Guard Interlocking](https://www.hse.gov.uk/agriculture/experience/guard-interlocks.htm) | Use application-specific safety requirements rather than an absolute safety promise. This technical reference does not establish Indian regulatory compliance. |
| LT/HT wording | [HVAX: Electrical LT / HT Panels](https://hvax.in/electrical-ht-lt-panels.html) | Expand LT and HT as low-tension and high-tension. Do not copy the supplier's voltage/current ratings into IECS copy. |
| Founder experience | [Prasad Bhole: public LinkedIn profile](https://in.linkedin.com/in/prasad-bhole-33621198) | Search results corroborated the existing client-sheet statement that the founder is an electrical engineer with 10+ years of experience. This remains a self-reported founder claim, not a company-age claim or an independently audited credential. The direct page blocked retrieval. |

Some direct web pages failed retrieval; the search-index evidence is narrower than a full source inspection. Web research does not independently establish service delivery, contact ownership, GST registration validity, completed projects, response times, certifications, or commercial outcomes. No such new claims were added. The phone, email, address and GSTIN retain their existing client-supplied provenance; no live call or email was sent.

## Copy changes

- Rewrote all 23 service descriptions in plain language, with practical scoping prompts where useful.
- Explained PLC, EOL, LT/HT and Poka-Yoke in the service details.
- Replaced vague homepage and shared enquiry copy with specific production needs and a clear “Discuss your project” action.
- Made the Contact page explain what to share: component/process/equipment, desired change, location and timeline.
- Retained the distinction between founder experience and company age, the supplied contact directory, and the existing labels identifying generated imagery as illustrative concepts.
- Preserved the five-page design, equipment groups, existing QA history and client-documented service scope. CRO edits are editorial improvements; conversion uplift has not been measured.

## Validation

- `npm run build`: passed; five pages generated.
- `npm run check`: passed; 148 local links/assets, anchors, contact values and catalogue references checked; archives excluded from deployment output.
- `npm run check:content`: passed; 20/20 brochure services covered, each with an enquiry path.
- Full Chromium browser run: all five pages at 320, 390, 768 and 1440 pixels passed layout and loading checks. Equipment filters/dialogs, contact paths, menu/dialog focus restoration and reduced motion passed; no JavaScript errors or failed asset requests.
- Final interaction run: passed for all 23 service disclosures (opening, exact visible description, contact link and closing), alongside the existing equipment/contact/menu flows.
- JavaScript syntax checks and `git diff --check` passed.
- Desktop Services and mobile Contact screenshots were visually inspected. Browser artifacts remain ignored and excluded from `dist/`.

These checks establish content coverage and local Chromium behaviour. They do not establish a production deployment, delivery through a visitor's email/phone application, real-device/cross-browser behaviour, or engineering certification.

## Release scope

Commit changes on `dev-branch`; push `dev-branch` first. Promote that exact checked commit to remote `QA` only after the checks pass. Use normal fast-forward pushes and verify both remote heads. Do not push, merge into or deploy `main` during this review. Deployable output remains `dist/`, and no hosting action is part of this change.
