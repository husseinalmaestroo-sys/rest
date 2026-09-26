import type { Metadata, Viewport } from "next";
import { Alegreya_Sans, Amiri, Courier_Prime, Newsreader, Reenie_Beanie, Young_Serif } from "next/font/google";
import { fullAddress, site } from "@/content/site";
import { RevealObserver } from "@/components/RevealObserver";
import "./globals.css";

// Display: a warm, chunky serif with the feel of a painted shop sign.
const young = Young_Serif({ weight: "400", subsets: ["latin"], variable: "--font-young", display: "swap" });
// Editorial: italics, pull quotes, body copy with a newspaper voice.
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});
// Supporting sans: humanist, calligraphic roots, not corporate.
const alegreyaSans = Alegreya_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-alegreya-sans",
  display: "swap",
});
// Labels: price tags, shelf tags, typed recipe cards.
const courier = Courier_Prime({ weight: "400", subsets: ["latin"], variable: "--font-courier", display: "swap" });
// Hand notes: the marker on a paper bag.
const reenie = Reenie_Beanie({ weight: "400", subsets: ["latin"], variable: "--font-reenie", display: "swap" });
// Arabic: two words, used sparingly.
const amiri = Amiri({ weight: "400", subsets: ["arabic"], variable: "--font-amiri", display: "swap", preload: false });

const title = `${site.name} — Middle Eastern Market, Bakery & Catering in Orland Park, IL`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description:
    "Fresh bakery, Middle Eastern groceries, prepared food and catering for the neighborhood. 9005 151st St, Orland Park, IL · 708-949-8890.",
  keywords: [
    "Orland Park bakery",
    "Middle Eastern market Orland Park",
    "Mediterranean grocery",
    "shawarma Orland Park",
    "falafel",
    "hummus",
    "pita",
    "catering Orland Park",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title: site.name,
    description: "A little taste of home, right here in Orland Park. Market, bakery, prepared food and catering.",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: "A little taste of home, right here in Orland Park.",
  },
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#f2eadb",
  width: "device-width",
  initialScale: 1,
};

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
  sameAs: [site.social.facebook, site.social.instagram].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fonts = [young, newsreader, alegreyaSans, courier, reenie, amiri].map((f) => f.variable).join(" ");
  return (
    <html lang="en" className={fonts} suppressHydrationWarning>
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
