# IECS website

Five pages: Home, About, Services, Products and Contact. A complete redesign with pure white backgrounds, orange accents, self-hosted Manrope and IBM Plex Mono, responsive layouts and reduced-motion support.

## Run locally

Requires Node.js 20 or newer. No dependency installation is needed.

```sh
npm run build
npm run dev
```

Open http://localhost:4173. `PORT=8080 npm run dev` selects another port.

```sh
npm run check
```

## Editing

- `config/site.json`: clearly marked sample contact information. Replace it with approved details before launch.
- `scripts/build.mjs`: shared page templates, family summaries, navigation and copy. Running the build regenerates all five HTML pages, `js/catalog.json` and the page inventory in `js/pages.json`.
- `css/site.css`: design tokens and responsive layouts.
- `js/site.js`: navigation, filters, native product dialogs, service interactions and project brief export.
- `docs/original-catalog.json` and `docs/original-services.json`: recovered source content. Product descriptions are draft material pending client confirmation.
- `assets/generated/`: optimized new visuals; originals remain in `/workspace/generated_images` in the creation workspace.
- `assets/trash/products-old-images/`: all 35 original reference images (34 used in the catalogue), excluded from the production build.
- `docs/REDESIGN-PLAN.md`: design direction, scope and launch requirements.

Deploy **only `dist/`** to any static host. Do not publish the repository root: it contains archived reference imagery and internal review documents. No live deployment has been configured.

## Browser checks

With Playwright installed and the preview server running:

```sh
npm run check:browser
```

Optional environment variables: `CHROMIUM_PATH` for an existing Chromium executable, `PLAYWRIGHT_MODULE` for a provisioned Playwright module and `PREVIEW_URL` for another local preview address. The check covers every page at 320, 390, 768 and 1440 pixels, then follows product dialogs and service accordions into the prefilled enquiry flow. `--flows-only` reruns just those interactions.

## Contact behavior

The brief builder validates required fields and allows visitors to copy or download their details. It does not submit personal data, save it on a server, or claim delivery. Contact details are explicitly marked preview placeholders, as requested. The sample email uses the reserved `.example` domain. Connect an approved delivery service only after receiving genuine contact details and data handling requirements.

## Product images

Generated recreations preserve the reference products as closely as possible while changing presentation and removing branding. Generation can vary mechanical details; verify frame topology, fixtures and components against the source before client sign-off. Generated images do not independently establish commercial image rights. There are no fabricated projects, clients, testimonials or performance statistics.
