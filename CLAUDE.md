# CLAUDE.md — CSI

Working notes for Claude Code (and future you) on this project. Read this first
before making changes so the site stays consistent with Chinelo's taste.

## The Studio
- **Brand:** CSI — the interior design studio of **Chinelo**.
- **Tagline feel:** atelier, collected, warm luxury with an African soul.
- **Founder:** Chinelo. BFA in Interior Design from **SCAD** (Savannah College of Art & Design). 5+ years of experience creating soulful homes, working alongside architects and builders.
- **Based:** Abuja, Nigeria. Frequently in the **USA**, open to travel/remote (e-design).
- **Business goal (#1):** attract new clients and convert them via the inquiry form.

## Chinelo's Preferences
- Describes herself as a **simple person** who also loves **top-notch, high-end design**. Keep the site elegant and uncluttered — never busy or gimmicky.
- Wants the site **slick, suave, modern**, echoing top interior designers and their social-media best practices.
- Values **artistic vision** + **replicated best practices** from leading designers (editorial layouts, big imagery, generous whitespace, refined type).
- Likes to **iterate** — she will modify content as the studio grows. Keep things easy to edit (plain HTML, clearly labeled sections).

## Design System (do not drift without asking)
- **Aesthetic:** Warm Afro-minimalism.
- **Palette:** bone/cream backgrounds, espresso ink, **terracotta** + **ochre** accents, warm woods, muted olive. All tokens in `assets/css/styles.css` `:root`.
- **Type:** `Cormorant Garamond` (soft, high-fashion display serif, weight 500) for headings; `Jost` (smooth geometric sans) for body/UI. Loaded via Google Fonts. Chosen for an upscale, sophisticated, soft feel. (Previous pairing was Fraunces + Inter.)
- **Voice/copy:** warm, confident, personal, first-person from Chinelo where it fits. Emphasize *feeling*, *story*, *soul*, *collected over time*. Avoid corporate jargon.

## Architecture
- **Static site**, no build step. Pure HTML + one CSS file + one JS file. Easy to host and edit.
- Pages: `index.html` (home), `portfolio.html`, `services.html`, `about.html`, `inquire.html` (intake form).
- Shared styles: `assets/css/styles.css`. Shared JS: `assets/js/main.js`.
- Nav + footer are duplicated per page (no templating). **If you change nav/footer, update all 5 pages.**
- Images: CSS placeholder tiles (`.ph`) stand in until real photos are added — see `assets/img/README.md`.

## Intake Form
- Lives on `inquire.html`. Submits to **Formspree** (free), delivering leads to the inbox.
- ⚠️ **Setup required:** replace `YOUR_FORM_ID` in `inquire.html` `<form action="…">` with a real Formspree form ID. See README → "Connecting the intake form".
- Fields capture: contact, location, project type, rooms, service, timeline, **budget**, vision, style words, referral source. (Budget qualifier is intentional — best practice among top designers.)
- JS handles AJAX submit + success message + honeypot spam guard.

## Deployment / Pipeline
- Repo: GitHub under **tekflix** (account `tekflix-projects`).
- CI/CD: GitHub Actions (`.github/workflows/deploy.yml`) auto-publishes to **GitHub Pages** on every push to `main`.
- `.nojekyll` present so Pages serves files as-is.

## TODO / Ideas backlog (suggest as we go)
- [ ] Connect Formspree form ID (or upgrade to email+Google Sheet later).
- [ ] Swap placeholder tiles for real project photography.
- [ ] Buy + connect a custom domain (e.g. csidesigns.com) — update the `CNAME`.
- [ ] Real Instagram/Pinterest handles (currently placeholders `@csidesigns`).
- [ ] Optional: blog/journal, project detail pages, before/after sliders, press logos.
- [ ] Optional: newsletter capture, downloadable "design guide" lead magnet.

## Conventions for future edits
- Keep it accessible (labels, alt text, focus states, reduced-motion support already in CSS).
- Reuse existing classes/tokens before inventing new ones.
- Match the surrounding markup style; keep copy in Chinelo's warm voice.
