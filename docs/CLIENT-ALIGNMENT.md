# IECS company alignment

The source is the text in three client-provided images supplied in the chat: the business card/specialties sheet, the 20-item key-services sheet, and the About Us sheet. Their colours, layout, typography and imagery are not branding references. The current QA design, self-hosted fonts, orange accents, responsive layouts and five-page structure are preserved. A new illustrative press-machine/tooling scene replaces the robot-led machinery thumbnail; the homepage uses the existing SPM/control-cabinet scene. The new generated master is `/workspace/generated_images/exec-68eeeb4e-44a1-4629-ba79-28e3a8db351c.png`, exported as `assets/generated/machines.webp` for web delivery.

## Business identity and contact

- Industrial Engineering Control Services (IECS), based in Bhosari, Pune.
- Contact: Prasad Bhole, +91 9527380281, iecs.control@gmail.com.
- S. No. 121, Sadguru Nagar, Kate Estate, Bhosari, Pune, Maharashtra - 411039.
- GSTIN: 27FQBPB1436F1ZB, transcribed from the business card.
- Founder: an electrical engineer with 10+ years of manufacturing, maintenance and engineering experience, supported by the About Us sheet. This is founder experience, not a claim about the company's age.
- Maps searches the supplied address. No coordinates or opening hours are invented.

## Service mapping

| Published group | Client-documented scope |
| --- | --- |
| Automation & controls | Low-cost/industrial automation, PLC, control software, manufacturing process development, assembly engineering controls, Poka-Yoke |
| Machines & tooling | SPM/custom machine design and complete building, press machines, mechanical tools, assembly tools, fixtures/checking fixtures, prototyping/sample development |
| Testing & traceability | Testing setups, end-of-line machine development, process-parameter/data traceability, barcode scanning |
| Electrical & fluid systems | Process/electrical control panels, LT/HT panel design, control-panel wiring, industrial DB wiring, electrical cabling, hydraulic/pneumatic control design, pneumatic pipelines |
| Production & material handling | Assembly lines/conveyors, ergonomic solutions, machinery safety interlocks/guarding, storage racks/bins/special trolleys, material handling, fabrication/engineering works |
| Installation & plant support | Installation/commissioning, annual plant maintenance, machine/manufacturing setup relocation, lifting hoist/jib crane installation and commissioning |

The unclear business-card phrase “Maintenance of Filed Work” is not reinterpreted as a separate specialist service. The two other sheets explicitly support annual plant maintenance and installation/commissioning, which are published.

## Equipment and editorial decisions

The Equipment page keeps `products.html` and the existing filter/dialog interaction. Six groups replace the 34 image-derived product variants: machines/tooling; panels/controls; testing/traceability; conveyors/assembly lines; workstations/safety; storage/material handling. The groups describe custom capabilities rather than an off-the-shelf catalogue. No ESD ratings, camera/lighting specifications, capacities, fixed configurations or other technical specifications are inferred from AI illustrations.

SCADA, robotic integration, retrofitting, genuine spare parts and detailed preventive-maintenance contract promises are excluded because the supplied text does not establish them. No project history, customer endorsements, company age, delivery guarantee or response-time promise is added. Retired drafts, source code and reference assets have been removed; the current publishing inputs live in `config/` and `scripts/build.mjs`.

## Validation

Run `npm run build`, `npm run check`, and `npm run check:browser` against the local server. Static checks cover five pages, relative links/assets/anchors, client contact actions and map query, published equipment data, service count, unsupported claims and absence of retired site assets. Browser checks cover all pages at 320, 390, 768 and 1440 pixels, all six equipment filters/dialogs, dialog focus restoration, service accordions, mobile menu, contact paths and reduced motion. Browser reports and screenshots are saved in ignored `artifacts/`.

Use `dist/` for build-based deployment. The current release is synchronised across the repository branches.
