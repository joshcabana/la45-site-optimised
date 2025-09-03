import { Inter, Playfair_Display } from "next/font/google";

// Inter: body text
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-inter",
});

// Playfair Display: display/headers
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
  variable: "--font-playfair",
});

// Convenience string to apply CSS variables at the <html> element
export const fontVars = `${inter.variable} ${playfair.variable}`;

