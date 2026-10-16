# IECS redesign

## Direction
Pure white (#ffffff) backgrounds. Orange (#f05a28) as the primary brand colour; charcoal text, neutral grey rules. Spacious editorial composition, precision industrial photography, Manrope typography and IBM Plex Mono technical captions. White page backgrounds stay white at every breakpoint. Motion supports orientation: short transitions, subtle reveals, no scroll hijacking or decorative looping counters.

## Information architecture
- Home: positioning, capabilities, product families, engineering approach, enquiry.
- Products: five filterable families with all 34 variants inside product dialogs; no separate product pages.
- Services: 19 services grouped into expandable sections on a single Services page.
- About: practical engineering approach and project process.
- Contact: structured brief builder, copy/download; delivery activates only after real contact information is supplied.

## Implementation checklist
- [x] Recover existing source from origin/main (c8b85c0).
- [x] Capture original catalogue and service copy for traceability.
- [x] Archive all 35 old product images (34 used in the catalogue) in assets/trash/products-old-images/.
- [x] Archive old non-brand photography and placeholder partner logos.
- [x] Build all five pages with a shared responsive design system.
- [x] Create an original hero and 34 individual reference-based product recreations.
- [x] Implement mobile navigation, catalogue filters, product dialogs, service accordions, brief builder.
- [x] Verify desktop and mobile, keyboard behavior, reduced motion, and asset integrity.

## Content and launch gates
The recovered source explicitly marks its contact information and product copy as placeholders. Do not publish the sample phone, address, hours, or unverified email. No invented clients, testimonials, metrics, certifications, or installation claims. Generated scenes are illustrative; final product geometry needs engineering review. Existing catalogue variant descriptions remain draft reference copy. The 34 individual recreations remain subject to engineering verification.

For this draft, the user approved clearly marked sample contact information. These values live in config/site.json. The enquiry builder creates a local brief and does not send it.

Needed for launch from client: original brief; approved contact details; actual product dimensions/specifications; approved brand logo; confirmation of services and founder story; real project evidence if case studies are desired. Existing logo files are preserved. This first implementation uses an IECS text wordmark until brand review.

## Scope correction
The 58 additional product-family, product and service-detail pages have been removed at the user's request. The site contains only Home, About, Services, Products and Contact. Product images and all catalogue/service content remain available inside the main pages. Build configuration and validation enforce the five-page structure.

## Validation
Build and static integrity checks, browser coverage at 320/360/390/768/1024/1440px, navigation/filter/dialog/form checks, overflow checks, keyboard and reduced-motion checks. Results are recorded in docs/VALIDATION.md.
