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
- **Five typefaces, each with a single job.** Young Serif for shop-sign headlines, Newsreader for editorial text and italics, Alegreya Sans for supporting text, Courier Prime for labels and price tags, and Reenie Beanie for handwritten notes. A few words of Arabic are set in Amiri: أهلاً وسهلاً in the hero and صحتين in the footer.
- **Each section is laid out differently.** The market is a store directory, the bakery a staggered spread on kraft paper under a serrated bag-top edge, prepared food a printed counter menu with dotted leaders, catering a recipe card, reviews a newspaper clipping, and the location section a street sign and a folded map.
- **Motion is kept small.** Images are uncovered from the top, lines of type rise into place, and hover states are gentle. All of it is turned off under `prefers-reduced-motion`, and without JavaScript everything is simply visible.
- **Mobile has its own composition.** It has a menu-card overlay, swipeable plates in the kitchen section, thumbnails in the directory and a fixed Call / Directions bar at the bottom.

## Content: what's real and what's waiting

Every business fact is in `src/content/site.ts`. Nothing in it was invented.

| Item | Status | Where |
| --- | --- | --- |
| Name, address, phone | Verified | `site.ts` |
| Rating (4.6 / 5, 300+ reviews) | As supplied | `site.ts` → `rating` |
| Opening hours | **Unknown**: the site says "Call for today's hours" | `site.ts` → `hours` |
| Facebook / Instagram | **Unknown**: nothing is rendered until URLs are added | `site.ts` → `social` |
| Customer quotes | **None added**: the review wall shows the rating and a "leave a review" note | `copy.ts` → `customerQuotes` |
| About story | Kept general on purpose. Replace it with the family's own words | `copy.ts` → `about` |
| Menu items and descriptions | Names only, with no prices or ingredient claims | `copy.ts` |

## Photography

The site does not use stock or AI-generated food images. Each image position is a named **slot** in `src/content/photos.ts`. Until a real photo is added, the slot shows an art-directed proof: toned paper, crop marks, a line drawing of the dish and the shot brief for the photographer.

To add a real photo:

1. Put the file in `public/photos/`, e.g. `public/photos/bakery-pita.jpg`.
2. In `src/content/photos.ts`, set `src: "/photos/bakery-pita.jpg"` on that slot.
3. Check that `alt` still describes what the photo actually shows. If the subject is off-centre, add `focus: "50% 30%"`.

`next/image` resizes and optimises the image automatically. The `brief` on each slot is a ready-made shot list. To launch before the shoot without the briefs showing, set `NEXT_PUBLIC_PHOTO_BRIEFS=off`.

## Structure

```
src/
  app/            layout (fonts, metadata, JSON-LD), page, OG image, robots, sitemap, icon
  content/        site facts, section copy, photo slots — edit these, not the components
  components/
    sections/     Hero, Market, Bakery, Kitchen, Catering, About, Reviews, Location
    Header, Footer, CallBar, Photo, Stamp, Wordmark, drawings, RevealObserver
```
