import {
  Alegreya_Sans,
  Amiri,
  Aref_Ruqaa,
  Courier_Prime,
  El_Messiri,
  IBM_Plex_Sans_Arabic,
  Newsreader,
  Reenie_Beanie,
  Young_Serif,
} from "next/font/google";

// Display: a warm, chunky serif with the feel of a painted shop sign.
const young = Young_Serif({ weight: "400", subsets: ["latin"], variable: "--font-young", display: "swap" });
// Editorial: italics, pull quotes, body copy with a newspaper voice.
const newsreader = Newsreader({ subsets: ["latin"], style: ["normal", "italic"], variable: "--font-newsreader", display: "swap" });
// Supporting sans: humanist, calligraphic roots, not corporate.
const alegreyaSans = Alegreya_Sans({ weight: ["400", "500", "700"], subsets: ["latin"], variable: "--font-alegreya-sans", display: "swap" });
// Labels: price tags, shelf tags, typed recipe cards.
const courier = Courier_Prime({ weight: "400", subsets: ["latin"], variable: "--font-courier", display: "swap" });
// Hand notes: the marker on a paper bag.
const reenie = Reenie_Beanie({ weight: "400", subsets: ["latin"], variable: "--font-reenie", display: "swap" });
// Arabic text: a classic naskh for editorial copy (and the Arabic accents on the English site).
const amiri = Amiri({ weight: ["400", "700"], subsets: ["arabic"], variable: "--font-amiri", display: "swap", preload: false });

// Arabic site only.
// Display: El Messiri, rounded and sign-like — the Arabic counterpart to Young Serif.
const messiri = El_Messiri({ weight: ["500", "600", "700"], subsets: ["arabic"], variable: "--font-messiri", display: "swap" });
// Sans for UI and labels.
const plexArabic = IBM_Plex_Sans_Arabic({ weight: ["400", "500", "600"], subsets: ["arabic"], variable: "--font-plex-ar", display: "swap" });
// Ruq'ah calligraphy: stands in for italics and the handwritten notes.
const ruqaa = Aref_Ruqaa({ weight: ["400", "700"], subsets: ["arabic"], variable: "--font-ruqaa", display: "swap" });

export const latinFonts = [young, newsreader, alegreyaSans, courier, reenie, amiri].map((f) => f.variable).join(" ");
export const arabicFonts = [latinFonts, messiri.variable, plexArabic.variable, ruqaa.variable].join(" ");
