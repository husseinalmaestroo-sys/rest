/**
 * Editable copy for the homepage sections. Descriptions stay deliberately
 * general: no prices, no ingredient claims, nothing we haven't confirmed.
 */

import { photos } from "./photos";

export const marketAisles = [
  {
    name: "Bakery",
    note: "Bread, pies and pastries from the bakery counter, bagged to take home.",
    photo: photos.marketBakery,
  },
  {
    name: "Pantry",
    note: "Spices, grains, jars and tins — the shelf staples of a Middle Eastern kitchen.",
    photo: photos.marketPantry,
  },
  {
    name: "Fresh Foods",
    note: "What you need for tonight's cooking, from the fresh case.",
    photo: photos.marketFresh,
  },
  {
    name: "Prepared Foods",
    note: "Ready-made dishes to take home on the nights there's no time to cook.",
    photo: photos.marketPrepared,
  },
  {
    name: "Middle Eastern Favorites",
    note: "The familiar names and flavors people come back for.",
    photo: photos.marketFavorites,
  },
];

export const bakeryItems = {
  pita: {
    name: "Pita",
    note: "Soft, round and made for tearing. Take a bag for the week, or one for the ride home.",
    photo: photos.bakeryPita,
  },
  cheese: {
    name: "Cheese Pies",
    note: "Golden at the edges, and best eaten before you get to the car.",
    photo: photos.bakeryCheese,
  },
  spinach: {
    name: "Spinach Pies",
    note: "Folded into neat triangles. Easy to pack, easier to finish.",
    photo: photos.bakerySpinach,
  },
  pastries: {
    name: "Pastries",
    note: "Something sweet for the table, the tea, or the guests you didn't expect.",
    photo: photos.bakeryPastries,
  },
  bread: {
    name: "Fresh Bread",
    note: "Loaves for the table and bread for the week. Ask what's just come out.",
    photo: photos.bakeryBread,
  },
};

export const kitchenMenu = [
  { name: "Shawarma", note: "A counter classic" },
  { name: "Falafel", note: "Golden and crisp" },
  { name: "Hummus", note: "Made for scooping" },
  { name: "Rice Dishes", note: "Comfort by the plateful" },
  { name: "Lamb", note: "For the hungrier visits" },
  { name: "Sandwiches", note: "Wrapped to go" },
];

export const cateringOccasions = [
  "Family gatherings",
  "Celebrations",
  "Parties",
  "Community events",
  "Larger occasions",
];

/**
 * Real customer quotes only — copy them word for word from public reviews,
 * with the reviewer's first name or initial and the source. The review wall
 * shows them as pinned clippings; while this is empty it shows the rating
 * and an invitation to leave a review instead.
 */
export const customerQuotes: { quote: string; name: string; source: string }[] = [];

/** Replace with the family's own words when they're ready to share their story. */
export const about = {
  title: "One roof, three counters.",
  body: [
    "Orland Market & Bakery is a Middle Eastern market, bakery and kitchen on 151st Street in Orland Park.",
    "Come in for bread and leave with dinner. Stock the pantry, pick up something sweet on the way out, and call ahead when there's a crowd to feed. It's a neighborhood shop, and it's run for the neighborhood.",
  ],
};
