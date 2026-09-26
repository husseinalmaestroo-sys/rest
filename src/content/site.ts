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
   * Opening hours are not verified yet. Fill in to render them everywhere, e.g.
   * [{ days: "Mon – Sat", hours: "8am – 9pm" }, { days: "Sun", hours: "9am – 8pm" }]
   */
  hours: null as null | { days: string; hours: string }[],

  /** Add real profile URLs when confirmed. Empty values are not rendered. */
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
  },
} as const;

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

export const nav = [
  { href: "#market", label: "Market" },
  { href: "#bakery", label: "Bakery" },
  { href: "#kitchen", label: "Prepared Food" },
  { href: "#catering", label: "Catering" },
  { href: "#about", label: "About" },
] as const;
