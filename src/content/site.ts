/**
 * Verified business facts live here and only here.
 *
 * Content rule: nothing in this file is invented. Anything we do not know yet
 * (opening hours, social accounts, the family's own story) is `null` and the
 * UI renders an honest fallback ("Call for today's hours") until it is filled.
 */

export const site = {
  name: "Orland Market & Bakery",
  shortName: "Orland Market",
  description:
    "Middle Eastern market, bakery, prepared food and catering on 151st St in Orland Park, Illinois.",

  // Set NEXT_PUBLIC_SITE_URL in production so canonical + Open Graph URLs are absolute.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  address: {
    street: "9005 151st St",
    city: "Orland Park",
    region: "IL",
    postalCode: "60462",
    country: "US",
  },

  phone: {
    display: "708-949-8890",
    e164: "+17089498890",
  },

  rating: {
    value: "4.6",
    outOf: "5",
    count: "300+",
  },

  /**
   * Weekly opening hours in the shop's local time (America/Chicago), 24-hour
   * "HH:MM". Not verified yet, so null: the site says "Call for today's hours"
   * and the open-now badge stays hidden. Fill in to turn both on, e.g.
   * { mon: ["08:00", "21:00"], tue: ["08:00", "21:00"], ..., sun: null } — null = closed that day.
   */
  hours: null as null | Record<Weekday, [open: string, close: string] | null>,

  /** WhatsApp number in international format, digits only (e.g. "17089498890"). Turns on the WhatsApp button on the catering form. */
  whatsapp: null as string | null,

  /** Add real profile URLs when confirmed. Empty values are not rendered. */
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
  },

  /** Online ordering pages, only if the shop is actually listed. Empty values are not rendered. */
  orderOnline: {
    doordash: null as string | null,
    ubereats: null as string | null,
    grubhub: null as string | null,
  },

  /**
   * Answers only the shop can confirm. Each FAQ question stays hidden until
   * its answer is filled in here (English and Arabic).
   */
  facts: {
    halal: null as null | { en: string; ar: string },
    parking: null as null | { en: string; ar: string },
    delivery: null as null | { en: string; ar: string },
  },

  /**
   * Seasonal banner windows (inclusive, YYYY-MM-DD). Dates for Ramadan and
   * the Eids follow the moon — check them each year. Set
   * NEXT_PUBLIC_FORCE_SEASON=ramadan (or eid-adha) to preview.
   */
  seasons: [
    { id: "ramadan", start: "2027-02-01", end: "2027-03-12" },
    { id: "eid-adha", start: "2027-05-08", end: "2027-05-19" },
  ] as { id: SeasonId; start: string; end: string }[],
} as const;

export type Weekday = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
export type SeasonId = "ramadan" | "eid-adha";

export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}`;

export const telHref = `tel:${site.phone.e164}`;

export const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${site.name}, ${fullAddress}`,
)}`;

export const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
  `${site.name}, ${fullAddress}`,
)}&z=15&output=embed`;

export const reviewsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.name} ${fullAddress}`,
)}`;

export const whatsappHref = (text: string) =>
  site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}` : null;

/** The season whose window contains `date`, if any. */
export function activeSeason(date = new Date()): SeasonId | null {
  const forced = process.env.NEXT_PUBLIC_FORCE_SEASON as SeasonId | undefined;
  if (forced) return forced;
  const day = date.toISOString().slice(0, 10);
  return site.seasons.find((s) => day >= s.start && day <= s.end)?.id ?? null;
}
