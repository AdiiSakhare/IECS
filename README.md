# IECS website

Five pages: Home, About, Services, Equipment and Contact. The Equipment page retains `products.html` so existing URLs continue to work. A complete redesign with pure white backgrounds, orange accents, self-hosted Manrope and IBM Plex Mono, responsive layouts and reduced-motion support.

## Run locally

Requires Node.js 20 or newer. No dependency installation is needed.

```sh
npm run build
npm run dev
```

Open http://localhost:4173. `PORT=8080 npm run dev` selects another port.

```sh
npm run check
npm run check:content
```

## Editing

- `config/site.json`: client-provided contact person, phone, email, Bhosari address and GSTIN.
- `config/services.json`: 23 documented capabilities organised into six service groups.
- `config/equipment.json`: six equipment capability groups and their supported application descriptions.
- `docs/FINAL-CONTENT-AUDIT.md`: 20-service brochure mapping, web verification sources, copy decisions and current QA results.
- `docs/CLIENT-ALIGNMENT.md`: source mapping, editorial decisions and validation for the company alignment.
- `scripts/build.mjs`: shared page templates, family summaries, navigation and copy. Running the build regenerates all five HTML pages, `js/catalog.json` and the page inventory in `js/pages.json`.
- `css/site.css`: design tokens and responsive layouts.
- `js/site.js`: navigation, equipment filters, native capability dialogs, and service interactions.
- `docs/original-catalog.json` and `docs/original-services.json`: archived source material; these are no longer used as publishing inputs. The current client-aligned content lives in `config/`.
- `assets/generated/`: optimized new visuals; originals remain in `/workspace/generated_images` in the creation workspace.
- `assets/trash/products-old-images/`: all 35 original reference images (34 used in the catalogue), excluded from the production build.
- `docs/REDESIGN-PLAN.md`: design direction, scope and launch requirements.

Deploy **only `dist/`** to any static host. Do not publish the repository root: it contains archived reference imagery and internal review documents. No live deployment has been configured.

## Browser checks

With Playwright installed and the preview server running:

```sh
npm run check:browser
```

Optional environment variables: `CHROMIUM_PATH` for an existing Chromium executable, `PLAYWRIGHT_MODULE` for a provisioned Playwright module and `PREVIEW_URL` for another local preview address. The check covers every page at 320, 390, 768 and 1440 pixels, then follows product dialogs and service accordions to the Contact page. `--flows-only` reruns just those interactions.

## Contact behavior

The Contact page is a static directory with email, phone and address. There is no enquiry form, brief export, submission handler or backend requirement. Contact values live in `config/site.json`. The published directory uses the supplied client details, standard email and phone links, and an address search on Google Maps. The map link searches the address; it is not a verified coordinate pin. Unconfirmed opening hours are not published. The site supports GitHub Pages, including hosting under a repository subpath or a custom domain.

## Equipment imagery

The existing visual direction is preserved. Generated imagery illustrates equipment concepts; it is not evidence of completed IECS projects, exact product specifications or commercial configurations. The capability catalogue uses client-documented descriptions instead of inferring features from the images. Individual variants intentionally have no images when no suitable illustration is available. Existing generated assets remain available, while archived originals and internal documents remain excluded from `dist/`.
