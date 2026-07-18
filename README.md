# House of Nelo — Interior Design

The website and client-intake experience for **House of Nelo**, the interior design
studio of **Chinelo** — SCAD-trained, Abuja-based, designing across the USA and worldwide.

Aesthetic: **Warm Afro-minimalism** — bone/cream, espresso ink, terracotta & ochre accents,
`Fraunces` + `Inter` type. Slick, editorial, and built to convert new clients.

---

## What's inside

| Page | Purpose |
| --- | --- |
| `index.html` | Home — hero, philosophy, featured work, services, process, testimonials, CTA |
| `portfolio.html` | Filterable project gallery with lightbox |
| `services.html` | Service detail, investment guide, FAQ |
| `about.html` | Chinelo's story, SCAD background, credentials, values |
| `inquire.html` | **Client intake form** (the lead-capture engine) |

Supporting files: `assets/css/styles.css`, `assets/js/main.js`, `assets/img/` (placeholders + guide).

No build step — it's a fast static site. Just open `index.html`.

---

## Run locally

```bash
# any static server works, e.g.:
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Connecting the intake form (do this to receive leads)

The form on `inquire.html` posts to **Formspree** (free tier).

1. Go to <https://formspree.io> and create a free account.
2. Create a new form and set the destination to **tekflixllc@gmail.com** (or your preferred inbox).
3. Copy the form's endpoint ID (looks like `xyzabcd`).
4. In `inquire.html`, replace `YOUR_FORM_ID` in:
   ```html
   <form data-inquiry action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
5. Submit a test — the first submission triggers Formspree's confirmation email.

The form already includes an AJAX success message and a honeypot spam guard.
Want leads logged to a Google Sheet too? Formspree → Zapier/Make, or ask Claude to wire it up.

---

## Deployment — GitHub Pages (automated)

This repo ships with a GitHub Actions pipeline (`.github/workflows/deploy.yml`)
that **auto-publishes on every push to `main`**.

One-time setup after the repo exists:
1. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main` (or use **Actions → Deploy to GitHub Pages → Run workflow**).
3. Your site goes live at `https://<owner>.github.io/<repo>/`.

### Custom domain (optional)
1. Buy a domain (e.g. `houseofnelo.com`).
2. Add a file named `CNAME` at the repo root containing just: `houseofnelo.com`.
3. Point the domain's DNS at GitHub Pages, then set it under **Settings → Pages**.

---

## Everyday workflow

```bash
git checkout -b my-change      # branch for edits
# ...make edits...
git add -A
git commit -m "Update portfolio copy"
git push -u origin my-change   # open a PR, or merge to main to deploy
```

Preferences, design rules, and the ideas backlog live in **`CLAUDE.md`** — read it before editing.
