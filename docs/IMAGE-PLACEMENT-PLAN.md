# Image placements after Services

Services now establishes the pattern: homepage-style heading and full-width hero, followed by one contextual image for each of its six capability groups. Keep the existing restrained typography, white space and orange accents.

The earlier `docs/hero-images.json` records inner-page heroes as generated and ready for placement. Before this pass, Services still called the text-only `intro()` template, and `assets/generated/heroes/services.webp` was used by Home. Services now uses a separate newly generated hero at `assets/generated/services/hero.webp`.

Services verification: build and static checks passed; browser review at 320, 390, 768 and 1440 pixels found no horizontal overflow; all seven images loaded, all six capability images retained lazy loading, and desktop/mobile accordion interaction passed. No browser warnings or errors were recorded. Physical-device testing has not been performed.

## Recommended next pass

| Priority | Page | Placement | Purpose and limits |
| --- | --- | --- | --- |
| 1 | Equipment | Add a full-width hero below a homepage-style split heading, using the existing `assets/generated/heroes/products.webp` after reviewing its crop. | Complete the one-hero-per-page pattern. The six equipment cards already provide enough imagery below; avoid inserting more banners between them. |
| 2 | About | Move the existing engineering image into the homepage hero structure, with the introductory copy beside the title. | Make the top of the page consistent. Retain one main hero rather than adding another image directly beneath it. |
| 3 | Contact | Add a quiet workshop/detail hero using the existing `assets/generated/heroes/contact.webp`, with a short introductory heading and visible contact link above it. | Complete the shared hero pattern while preserving quick access to phone, email and address. Keep the crop relatively shallow and avoid images within the contact directory. |
| 4 | About | Add one close view of a fixture, technical drawing or assembly detail alongside “The process comes first.” | Break up the longest prose section and illustrate the process. A real approved workshop photograph would be preferable when available. Do not use generated portraits as the founder or team. |
| 5 | Home | Consider a single narrow process image beside the four-step “From concept to commissioning” section if the page still feels text-heavy after the other updates. | The home page already has a hero, two equipment images and an approach image. Preserve its breathing room; do not add a photograph to every capability row or process step. |
| 6 | Equipment dialogs | Add variant-specific images only when they explain a meaningful visual difference. | Use approved real photos or explicitly illustrative concepts. Do not repeat the same family image across every variant. |

## Shared rules

- Keep one dominant hero per page, using the same heading/image hierarchy as Home.
- Use consistent image ratios and realistic workshop lighting. Alternate wide context with closer equipment detail.
- Keep important equipment in the central crop area for smaller screens; inspect desktop and mobile crops before shipping.
- Export compressed WebP images. Load only the hero eagerly; lazy-load images lower on the page and specify dimensions to reserve space.
- Keep illustrations identified as concepts, with subject-specific alt text. Do not present generated machinery or premises as completed IECS projects.
- Keep accordions, navigation, contact details and calls to action easy to find. Avoid decorative images between every text block.

This is a proposal for the remaining pages; this pass implements Services only.
