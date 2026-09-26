import type { Metadata, Viewport } from "next";
import { dictionaries, type Locale } from "@/content/i18n";
import { site } from "@/content/site";

export const viewport: Viewport = {
  themeColor: "#f2eadb",
  width: "device-width",
  initialScale: 1,
};

/** Shared metadata for a locale; `path` is "" for home or "/menu". */
export function pageMetadata(locale: Locale, path = ""): Metadata {
  const t = dictionaries[locale];
  const self = `${locale === "ar" ? "/ar" : ""}${path}` || "/";
  return {
    metadataBase: new URL(site.url),
    title: path ? `${t.meta.menuTitle} — ${site.name}` : t.meta.title,
    description: t.meta.description,
    keywords: [
      "Orland Park bakery",
      "Middle Eastern market Orland Park",
      "Mediterranean grocery",
      "shawarma Orland Park",
      "falafel",
      "hummus",
      "pita",
      "catering Orland Park",
      "مخبز عربي أورلاند بارك",
    ],
    alternates: {
      canonical: self,
      languages: { en: path || "/", ar: `/ar${path}`, "x-default": path || "/" },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_AR" : "en_US",
      alternateLocale: locale === "ar" ? "en_US" : "ar_AR",
      url: self,
      siteName: site.name,
      title: site.name,
      description: t.hero.lead,
    },
    twitter: { card: "summary_large_image", title: site.name, description: t.hero.lead },
    formatDetection: { telephone: true, address: true },
  };
}
