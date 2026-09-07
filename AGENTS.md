## Project

Personal brand / freelance site for Ismael Arias (Senior Shopify Developer, ex-Amazon).
Static Astro site, bilingual (English default, Spanish under `/es`), Tailwind v4, no client
framework. Deployed as static files to Siteground (domain `ismaeljarias.com`).

Two service lines drive the whole site: **Shopify** (Plus/Hydrogen, Checkout Extensibility,
performance) and **WordPress** (booking systems, directories, B2B catalogs).

## Development

Start the dev server in background mode:

```
astro dev --background
```

Manage it with `astro dev status`, `astro dev logs`, `astro dev stop`. Same pattern for
`astro preview --background` when testing the production build.

## Where things live

- `src/site.config.ts` — name, email, Calendly URL, LinkedIn, GitHub, location. Single
  source of truth for contact info; every page pulls from here.
- `src/i18n/content.ts` — **all copy for both languages**, in two parallel objects (`en`,
  `es`) with the same shape. When you add or edit a string, update both. `t(locale)` returns
  the right object; `localePath()` / `switchLocalePath()` build locale-aware URLs.
- `src/layouts/BaseLayout.astro` — `<head>`, fonts, hreflang alternates, wraps every page in
  `Nav` + `Footer`.
- `src/views/*.astro` — the actual page content/layout (`HomeView`, `ShopifyView`, etc.),
  parameterized by `lang`.
- `src/pages/*.astro` and `src/pages/es/*.astro` — thin route files. Each just imports a view
  and a locale, e.g. `<ShopifyView lang="es" />`. A page's English and Spanish versions must
  stay structurally identical — only the `lang` prop and page `<title>` differ.
- `src/components/` — shared UI (`ServiceCard`, `CaseStudyCard`, `CTABanner`, `ProcessSteps`,
  `Nav`, `Footer`).
- `src/styles/global.css` — Tailwind v4 import + design tokens (`@theme` block: colors, font,
  the `fade-up` keyframe) + the `[data-reveal]` scroll-animation CSS.
- `src/scripts/reveal.ts` — the scroll-reveal script (see Animation below).

## Adding a new page

1. Add the copy to **both** `en` and `es` objects in `src/i18n/content.ts`.
2. Create `src/views/YourPageView.astro` taking a `lang` prop, pulling copy via `t(lang)`.
3. Create `src/pages/your-page.astro` (English) and `src/pages/es/your-page.astro` (Spanish),
   each just wiring `BaseLayout` + your view + the right `lang`.
4. Add the route to the `links` array in `src/components/Nav.astro` and `Footer.astro` if it
   should appear in navigation.
5. Run the testing checklist below before calling it done.

## Routing / i18n gotcha

`astro.config.mjs` sets `trailingSlash: 'never'`. `localePath()` and `switchLocalePath()` in
`src/i18n/content.ts` must never emit a trailing slash (e.g. Spanish home is `/es`, not
`/es/`) or the language switcher 404s. If you touch those functions, verify every route still
resolves (see checklist).

## Animation

Scroll-reveal uses **native CSS transitions + IntersectionObserver** (`src/scripts/reveal.ts`
+ the `[data-reveal]` rules in `global.css`), not GSAP. GSAP was tried and dropped — it added
~27KB gzip for a simple fade-up, which didn't fit a site whose own pitch is Core Web Vitals.
Mark any element that should fade in on scroll with `data-reveal` (and optionally
`data-reveal-delay="0.1"` for stagger). If a future page genuinely needs richer animation
(timelines, easing curves, SVG path drawing) GSAP is a reasonable re-add for that specific
case — don't reintroduce it for basic fades.

The reveal script defers itself until `document.visibilityState === 'visible'` (handles
prerendered/background-tab loads) — don't remove that guard.

## Content rules (from the business plan this site implements)

- **Never show fixed project pricing** except the Performance Audit entry offer (currently
  "From $900 USD" on `/shopify`). Everything else routes to a Calendly call — diagnose before
  quoting.
- **Never mention Crocoblock or Elementor by name** anywhere public-facing on the WordPress
  pages. Describe outcomes (booking systems, directories, catalogs), not the tooling.
- **Don't invent case-study metrics.** The case studies on `/work` are anonymized-by-role but
  real (Amazon, Kritik, Viafoura) — qualitative Problem/Action/Result language only, no
  fabricated percentages or numbers that were never verified.
- Calendly (`calendly.com/ismaeljarias`) is the primary CTA everywhere. Email is a secondary
  fallback.

## Testing checklist (run before considering any change done)

```
npx astro check          # type errors
rm -rf dist && npm run build   # production build
```

Then spot-check with Lighthouse against the built output (not the dev server — dev server
ships extra JS/CSS that skews results):

```
npx astro preview --background
npx --yes lighthouse http://localhost:4321/ --output=json --output-path=/tmp/lh.json \
  --chrome-flags="--headless --no-sandbox" --quiet \
  --only-categories=performance,accessibility,best-practices,seo
```

Target is 100/100/100/100 on every page, both locales — that's the current baseline, don't
regress it. If a change touches routing or the language switcher, manually click through both
`Español`/`English` links in a real browser rather than trusting `curl`, since Astro will
redirect/404 on trailing-slash mismatches that a raw HTTP check can mask.

## Deployment

Static output (`output: 'static'` in `astro.config.mjs`). `npm run build` produces `dist/`,
which is what gets deployed to Siteground (`public_html`) — currently via manual upload
(Site Tools → File Manager, or SFTP). `dist/` and `node_modules/` are gitignored; only source
goes to GitHub.

If/when this moves to automated deploy (GitHub Actions → SFTP on push to `main`), update this
section with the workflow file location and required repo secrets.
