# Baseline Rally (BLR) Website

A simple, modern, mobile-friendly static website built from the Baseline Rally
Website Buildout Guide. No build tools, no server needed — just open the files
in a browser or upload the whole folder to any web host.

## Pages
| File | Page |
|------|------|
| `index.html` | Home (logo, scrolling event banner, hero, nav cards) |
| `about.html` | About Us (full story + contact) |
| `events.html` | Events (defaults to "Events Coming Soon") |
| `sponsorship.html` | Sponsorship (copy + "Become a Sponsor" email button) |
| `terms.html` | Terms, Conditions & Event Disclaimer (all 19 sections) |

Every page has the clickable **BLR logo** (returns to home), the standard footer,
and the `© 2026 Baseline Rally LLC` copyright.

## Fonts — nothing more to do
The **Blade Runner** font (`fonts/BladeRunnerMovieFont.ttf`) is **bundled with the
site** and loaded via `@font-face` in `css/styles.css`. Because the file travels
with the site, the logo/headings show correctly for **every visitor** — not just on
your PC. **No PNG export is needed.** It is used only for the "BLR" / "Baseline Rally"
brand text; body copy uses Anton (from Google Fonts) / Arial for readability.

> Note: dafont fonts are usually free for personal use. Confirm the license before
> using it on a public commercial site.

## How to update things later

### Add a live event
Open `events.html`. Comment out the `#no-event` "Events Coming Soon" block and
un-comment the `event-card` template right below it. Fill in the event name, date,
description, and replace `EVENTBRITE_LINK` with the real Eventbrite URL.

### Add images (from Dropbox)
Replace any `<div class="media-placeholder">…</div>` with:
```html
<img src="images/your-photo.jpg" alt="Describe the photo" />
```
Put photos in an `images/` folder. Optimize/compress them first for fast loading.

### Contact / social links
Email `baselinerallys@gmail.com`, Instagram `@baselinerally.official`, and the
Facebook page are already wired into every footer.

## Publishing
Upload the entire folder to any static host (Netlify, GitHub Pages, Cloudflare
Pages, Vercel, or traditional web hosting). Keep the folder structure intact.
