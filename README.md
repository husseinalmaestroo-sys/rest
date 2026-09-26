# Orland Market & Bakery

The website for Orland Market & Bakery: a Middle Eastern market, bakery, prepared-food counter and caterer at 9005 151st St, Orland Park, IL.

Built with Next.js (App Router), React, TypeScript and Tailwind CSS v4.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run typecheck
```

Set `NEXT_PUBLIC_SITE_URL` (for example `https://your-domain.com`) in production. Canonical URLs, Open Graph, the sitemap and the LocalBusiness structured data all use it.

## Design notes

The site is designed to look like a printed neighbourhood food paper rather than a restaurant template.

- **Paper and ink.** Cream paper, espresso ink and one accent (paprika). Olive shows up only on the street sign, wheat only on the dark kitchen page, and kraft only on the bakery page. A fixed grain layer makes the surface look printed.
- **Arabic edition.** `/ar` is the same design set right to left, with its own type: El Messiri for headlines, Amiri for text, IBM Plex Sans Arabic for labels, and Aref Ruqaa calligraphy wherever the English uses italics or handwriting. Arabic is never letter-spaced or slanted.
- **Five typefaces, each with a single job.** Young Serif for shop-sign headlines, Newsreader for editorial text and italics, Alegreya Sans for supporting text, Courier Prime for labels and price tags, and Reenie Beanie for handwritten notes. A few words of Arabic are set in Amiri: أهلاً وسهلاً in the hero and صحتين in the footer.
- **Each section is laid out differently.** The market is a store directory, the bakery a staggered spread on kraft paper under a serrated bag-top edge, prepared food a printed counter menu with dotted leaders, catering a recipe card, reviews a newspaper clipping, and the location section a street sign and a folded map.
- **Motion is kept small.** Images are uncovered from the top, lines of type rise into place, and hover states are gentle. All of it is turned off under `prefers-reduced-motion`, and without JavaScript everything is simply visible.
- **Mobile has its own composition.** It has a menu-card overlay, swipeable plates in the kitchen section, thumbnails in the directory and a fixed Call / Directions bar at the bottom.

## Content: what's real and what's waiting

> **Demo mode is on.** `src/content/demo.ts` fills in sample hours, prices, parking/delivery answers, review quotes and "fresh today" items. Social and ordering accounts are placeholders that look like links but go nowhere. None of it is verified. Before launch, set `NEXT_PUBLIC_DEMO=off` and all of it disappears. The halal answer is real (confirmed by the owner) and stays either way.

Business facts are in `src/content/site.ts`, and all wording (English and Arabic) is in `src/content/i18n.ts`. Nothing in them was invented. Features that depend on a fact the shop hasn't confirmed yet are built but stay hidden until that fact is filled in.

| Feature | Status | Turn it on in |
| --- | --- | --- |
| Name, address, phone | Verified | `site.ts` |
| Rating (4.6 / 5, 300+ reviews) | As supplied | `site.ts` → `rating` |
| **Arabic edition** (`/ar`, right-to-left) | Live | copy in `i18n.ts` → `ar` |
| **Menu page** (`/menu`, `/ar/menu`) | Live, names only; each price shows "Ask" | `i18n.ts` → `menuPrices` |
| **Catering order slip** (builds a ready-made message to copy or read out) | Live | — |
| ↳ WhatsApp button on the slip | Hidden: needs the shop's WhatsApp number | `site.ts` → `whatsapp` |
| **FAQ** (where, how to order, catering, hours) | Live | answers in `i18n.ts` → `faq` |
| ↳ Halal / parking / delivery questions | Hidden: need the shop's answers | `site.ts` → `facts` |
| **Opening hours + live "Open now" badge** | Hidden: the site says "Call for today's hours" | `site.ts` → `hours` |
| **Ramadan / Eid banner** | Shows automatically inside its date window | `site.ts` → `seasons` (check the dates each year) |
| **Fresh today** strip | Hidden: needs a published Google Sheet | env `FRESH_TODAY_CSV_URL` (see below) |
| **Order online** (DoorDash / Uber Eats / Grubhub) | Hidden: only if the shop is listed | `site.ts` → `orderOnline` |
| Facebook / Instagram | Hidden | `site.ts` → `social` |
| Customer quotes | None added; real quotes only, word for word | `i18n.ts` → `customerQuotes` |

### Fresh today (edited by the shop, no code)

1. Make a Google Sheet with the columns `item_en`, `note_en`, `item_ar`, `note_ar` (first row = headers), one row per item.
2. **File → Share → Publish to web**, choose the sheet, format **CSV**, and copy the link.
3. Set `FRESH_TODAY_CSV_URL` to that link in the hosting environment.

The site re-reads the sheet every 5 minutes. Delete every row and the strip disappears.

### Previewing the seasonal banner

Build with `NEXT_PUBLIC_FORCE_SEASON=ramadan` (or `eid-adha`) to see it outside its dates.

## Photography

The site does not use stock or AI-generated food images. Each image position is a named **slot** in `src/content/photos.ts`. Until a real photo is added, the slot shows a colour illustration of the dish on toned paper (`src/components/drawings.tsx`).

To add a real photo:

1. Put the file in `public/photos/`, e.g. `public/photos/bakery-pita.jpg`.
2. In `src/content/photos.ts`, set `src: "/photos/bakery-pita.jpg"` on that slot.
3. Check that `alt` still describes what the photo actually shows. If the subject is off-centre, add `focus: "50% 30%"`.

`next/image` resizes and optimises the image automatically. The `brief` on each slot is a ready-made shot list; set `NEXT_PUBLIC_PHOTO_BRIEFS=on` to print it on the illustrations while planning a shoot. `PHOTO_PROMPTS.md` has matching prompts if you decide to generate images instead.

## Structure

```
src/
  app/
    (en)/         English root layout, home, /menu
    (ar)/         Arabic root layout (lang="ar" dir="rtl"); pages under ar/ → /ar, /ar/menu
    fonts.ts      Latin + Arabic typefaces; OG image, robots, sitemap, icon
  content/        site facts, English/Arabic copy, photo slots — edit these, not the components
  lib/            opening-hours logic, shared metadata
  components/
    sections/     Hero, FreshToday, Market, Bakery, Kitchen, Catering, About, Reviews, Faq, Location, SeasonBanner
    HomePage, MenuPage, Header, Footer, CallBar, CateringForm, Hours, Photo, Stamp, Wordmark, drawings
```
