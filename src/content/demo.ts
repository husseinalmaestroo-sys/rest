/**
 * DEMO CONTENT — sample values so every feature is visible in a demo.
 *
 * None of this is verified: hours, prices, parking and delivery answers,
 * customer quotes and "fresh today" items are made up for presentation.
 * Social and ordering accounts are placeholders that look like links but
 * go nowhere.
 *
 * Before launch: set NEXT_PUBLIC_DEMO=off (everything here disappears and
 * the site falls back to the verified facts in site.ts), then fill in the
 * real values in site.ts / i18n.ts.
 */

import type { Weekday } from "./site";

export const DEMO = process.env.NEXT_PUBLIC_DEMO !== "off";

/** Marks an account that should render as a link-shaped label, not a link. */
export const PLACEHOLDER = "placeholder";

type Bilingual = { en: string; ar: string };

export const demo = {
  hours: {
    mon: ["08:00", "21:00"],
    tue: ["08:00", "21:00"],
    wed: ["08:00", "21:00"],
    thu: ["08:00", "21:00"],
    fri: ["08:00", "22:00"],
    sat: ["08:00", "22:00"],
    sun: ["09:00", "20:00"],
  } as Record<Weekday, [string, string] | null>,

  whatsapp: "17089498890",

  social: { facebook: PLACEHOLDER, instagram: PLACEHOLDER },

  orderOnline: { doordash: PLACEHOLDER, ubereats: PLACEHOLDER, grubhub: PLACEHOLDER },

  facts: {
    parking: {
      en: "Yes — there's free parking in the lot right outside the shop.",
      ar: "إيه — في مواقف مجانية قدّام المحل مباشرة.",
    } as Bilingual,
    delivery: {
      en: "Not directly, but you can order through DoorDash, Uber Eats or Grubhub. For catering, we'll talk through pickup or delivery when you call.",
      ar: "مش مباشرة، بس فيك تطلب عن طريق DoorDash أو Uber Eats أو Grubhub. وللكاترينغ منحكي بالاستلام أو التوصيل لما تتصل.",
    } as Bilingual,
  },

  prices: {
    pita: "$2.99",
    "cheese-pies": "$3.49",
    "spinach-pies": "$3.49",
    pastries: "from $1.99",
    bread: "$3.99",
    shawarma: "$11.99",
    falafel: "$8.99",
    hummus: "$6.99",
    rice: "$12.99",
    lamb: "$16.99",
    sandwiches: "$9.99",
  } as Record<string, string>,

  quotes: [
    {
      quote: {
        en: "The spinach pies are the best I've had outside my grandmother's kitchen.",
        ar: "فطاير السبانخ أطيب شي أكلته برّا مطبخ ستّي.",
      },
      name: "Rana K.",
    },
    {
      quote: {
        en: "They catered our daughter's graduation. Everyone asked where the food was from.",
        ar: "عملولنا كاترينغ لتخرّج بنتنا، والكل سأل من وين الأكل.",
      },
      name: "Layla H.",
    },
    {
      quote: {
        en: "Warm pita, a huge shawarma plate, and everyone behind the counter is so friendly.",
        ar: "خبز سخن، وصحن شاورما كبير، والكل عالكاونتر لطيف كتير.",
      },
      name: "Mike D.",
    },
  ] as { quote: Bilingual; name: string }[],

  fresh: {
    en: [
      { item: "Cheese pies", note: "out at 10am" },
      { item: "Spinach pies", note: "still warm" },
      { item: "Pita", note: "big batch" },
      { item: "Baklava", note: "fresh tray" },
    ],
    ar: [
      { item: "فطائر جبنة", note: "طلعت الساعة 10" },
      { item: "فطائر سبانخ", note: "لسّا سخنة" },
      { item: "خبز عربي", note: "دفعة كبيرة" },
      { item: "بقلاوة", note: "صينية طازة" },
    ],
  },
};
