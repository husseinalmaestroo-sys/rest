/**
 * Photo slots for the whole site.
 *
 * Every image on the page is a named slot. Until the shop's own photography
 * is in, a slot renders a colour illustration of the dish on toned paper.
 *
 * To go live with a real photo:
 *   1. Drop the file in /public/photos (e.g. /public/photos/hero-pita.jpg)
 *   2. Set `src: "/photos/hero-pita.jpg"` on the slot below
 *   3. Check the `alt` still describes what is actually in the picture
 *
 * `brief` is the shot list for the photographer (shown with NEXT_PUBLIC_PHOTO_BRIEFS=on).
 */

import type { DrawingName } from "@/components/drawings";

export type Tone = "wheat" | "paprika" | "olive" | "ink" | "cream";

export type PhotoSlot = {
  src: string | null;
  alt: string;
  brief: string;
  drawing: DrawingName;
  tone: Tone;
  /** CSS object-position for real photos, e.g. "50% 30%" */
  focus?: string;
};

const slot = (s: PhotoSlot) => s;

export const photos = {
  heroMain: slot({
    src: null,
    alt: "A stack of fresh pita on the bakery counter",
    brief: "Vertical. Warm pita stacked high on the counter, steam if possible, hands in frame.",
    drawing: "pita",
    tone: "olive",
  }),
  heroCounter: slot({
    src: null,
    alt: "The prepared food counter at Orland Market & Bakery",
    brief: "Square. The hot counter from the customer's side of the glass.",
    drawing: "shawarma",
    tone: "cream",
  }),

  // The market guide
  marketBakery: slot({
    src: null,
    alt: "Bread and baked goods on the market shelves",
    brief: "Bagged bread on the shelf, labels facing out.",
    drawing: "bread",
    tone: "olive",
  }),
  marketPantry: slot({
    src: null,
    alt: "Pantry aisle with jars, tins and spices",
    brief: "Straight-on aisle shot, rows of jars and tins.",
    drawing: "jar",
    tone: "paprika",
  }),
  marketFresh: slot({
    src: null,
    alt: "Fresh foods case",
    brief: "The fresh case, close and colourful.",
    drawing: "basket",
    tone: "cream",
  }),
  marketPrepared: slot({
    src: null,
    alt: "Prepared foods ready to take home",
    brief: "Packed containers ready to go, lids on, labels visible.",
    drawing: "container",
    tone: "olive",
  }),
  marketFavorites: slot({
    src: null,
    alt: "Middle Eastern favorites on the shelf",
    brief: "The shelf regulars come back for — tight crop.",
    drawing: "coffee",
    tone: "ink",
  }),

  // Bakery
  bakeryPita: slot({
    src: null,
    alt: "Fresh pita bread",
    brief: "Wide. Pita cooling in rows, shot from above on a bakery rack.",
    drawing: "pita",
    tone: "ink",
  }),
  bakeryCheese: slot({
    src: null,
    alt: "Cheese pies on a baking tray",
    brief: "Tall. A tray of cheese pies straight from the oven, golden edges.",
    drawing: "cheesePie",
    tone: "paprika",
  }),
  bakerySpinach: slot({
    src: null,
    alt: "Spinach pies",
    brief: "Square. Spinach pies piled on paper, one torn open.",
    drawing: "spinachPie",
    tone: "cream",
  }),
  bakeryPastries: slot({
    src: null,
    alt: "Pastries in the bakery case",
    brief: "Wide. The pastry case, rows of pieces catching the light.",
    drawing: "pastry",
    tone: "olive",
  }),
  bakeryBread: slot({
    src: null,
    alt: "Loaves of fresh bread",
    brief: "Tall. Bread bagged and still warm, handwritten label if there is one.",
    drawing: "bread",
    tone: "cream",
  }),

  // Prepared food
  kitchenShawarma: slot({
    src: null,
    alt: "Shawarma being carved",
    brief: "Tall. Shawarma being carved off the spit, knife mid-slice.",
    drawing: "shawarma",
    tone: "paprika",
  }),
  kitchenFalafel: slot({
    src: null,
    alt: "Falafel, just fried",
    brief: "Close. Falafel just out of the fryer, one broken open.",
    drawing: "falafel",
    tone: "cream",
  }),
  kitchenHummus: slot({
    src: null,
    alt: "A bowl of hummus",
    brief: "Overhead. Hummus swirled in the bowl, oil pooled in the middle.",
    drawing: "hummus",
    tone: "wheat",
  }),
  kitchenRice: slot({
    src: null,
    alt: "Rice with lamb",
    brief: "Three-quarter. A full plate of rice and lamb, generous portion.",
    drawing: "rice",
    tone: "olive",
  }),

  // Catering
  cateringTable: slot({
    src: null,
    alt: "A catering spread laid out on a long table",
    brief: "Wide. A full table from a real event — trays, bread, hands reaching in.",
    drawing: "platter",
    tone: "olive",
  }),

  // About / location
  storefront: slot({
    src: null,
    alt: "The Orland Market & Bakery storefront on 151st St",
    brief: "The storefront and sign from across the parking lot, late afternoon.",
    drawing: "storefront",
    tone: "wheat",
  }),
} satisfies Record<string, PhotoSlot>;
