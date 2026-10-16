# IECS redesign validation

Validated on 16 October 2026 in Chromium.

## Completed checks

- `npm run build`: five static pages generated successfully.
- `npm run check`: 115 local asset/page references resolved; every catalogue entry has its recreated image; all 34 variants retained; all 35 archived product references preserved; archived imagery excluded from `dist/`.
- JavaScript syntax checks passed for the build script, site interactions and preview server.
- All five pages checked at 320, 360, 390, 768, 1024 and 1440 pixels: pure white body backgrounds and no horizontal page overflow.
- No JavaScript page errors or HTTP asset failures in the browser run.
- Mobile menu opens, Escape closes it, and focus returns to the toggle.
- Category filtering displays the correct family. Product dialog includes the expected configurations, closes with Escape, and restores focus.
- All 19 service details retained; native disclosures open correctly.
- Enquiry URL prefill, required-field validation, brief preview and text-file download passed. No delivery is claimed.
- Reduced-motion preference disables the hero animation.
- Desktop/mobile screenshots captured for each page.
- All 34 catalogue products visually compared against their source references. Two observed differences were repaired: mesh-cart panel infill and the tool-storage bench's lavender colour.
- Sample contact details were added at the user's request. Final checks at 320, 390 and 1440 pixels cover the updated contact layout and placeholder labels.

## Review artifacts

Local screenshots and three reference/recreation comparison boards are in `artifacts/` (ignored by Git and excluded from deployment). These can be regenerated from a local browser; the production website does not depend on browser tooling.

## Limits and launch requirements

This is a local review build. Cross-browser and real-device testing remain before launch. Generated images preserve product appearance as closely as possible, but manufacturing details require technical approval; visual comparison is not engineering validation. Product descriptions inherited from the original catalogue are draft copy. The hero depicts an illustrative automation scene, not a verified IECS project.

The contact details are intentionally marked placeholders. The enquiry tool prepares a local brief only. Replace the sample contact values in `config/site.json` and connect an approved delivery service before offering online enquiry submission. Final brand/logo and client brief confirmation are still needed.

## Remaining-page build

- Generated 58 additional pages: five product-family pages, 34 product pages and 19 service-detail pages. Total: 63.
- Static validation passed for 1,993 page and asset references, including cross-page anchors, nested relative paths and all catalogue-to-detail mappings.
- Browser checks loaded all 63 pages at 320, 390, 768 and 1440 pixels: pure white backgrounds, one main heading and no horizontal overflow.
- Product-family, individual-product and service-detail screenshots were reviewed on desktop and mobile.
- Reproducible browser checks are in `scripts/browser-check.mjs`. The build and normal static checks require no dependencies; browser checks require Playwright.
- Click-through checks passed: catalogue → family → individual product → prefilled enquiry → brief download; services → service detail → prefilled enquiry.
- Quick-view dialog closing/focus restoration, nested-page mobile navigation and reduced-motion behavior passed. No JavaScript errors or failed asset requests occurred in the final flow checks.
