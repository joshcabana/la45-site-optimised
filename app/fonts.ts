import { Inter, Playfair_Display } from "next/font/google";

// Preload our chosen fonts and expose the CSS variables so they can be
// referenced in components and Tailwind. Display swap avoids flashes of
// invisible text on slow connections and adjustFontFallback improves
// cross‑platform rendering consistency.
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
  adjustFontFallback: true,
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
  preload: true,
  display: "optional",
  adjustFontFallback: true,
});
