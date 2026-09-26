import type { Locale } from "@/content/i18n";
import { dictionaries } from "@/content/i18n";
import { fullAddress, site } from "@/content/site";
import { RevealObserver } from "./RevealObserver";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": ["GroceryStore", "Bakery"],
  "@id": `${site.url}/#business`,
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone.e164,
  image: `${site.url}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.name}, ${fullAddress}`)}`,
  servesCuisine: ["Middle Eastern", "Mediterranean"],
  areaServed: { "@type": "City", name: "Orland Park, Illinois" },
  knowsLanguage: ["en", "ar"],
  sameAs: [site.social.facebook, site.social.instagram, ...Object.values(site.orderOnline)].filter(Boolean),
};

/** The <html> document shared by the English and Arabic root layouts. */
export function RootShell({ locale, fonts, children }: { locale: Locale; fonts: string; children: React.ReactNode }) {
  const t = dictionaries[locale];
  return (
    <html lang={locale} dir={t.dir} className={fonts} suppressHydrationWarning>
      <head>
        {/* Motion is opt-in: without JS, everything is simply visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, "\\u003c") }}
        />
      </head>
      <body>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
