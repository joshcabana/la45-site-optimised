import type { Metadata } from "next";
import "./globals.css";
import StickyNav from "@/components/StickyNav";
import { Inter, Playfair_Display } from "next/font/google";
import WebVitalsRUM from "@/components/WebVitalsRUM";
import AnalyticsConsent from "@/components/AnalyticsConsent";

// Preload our chosen fonts and expose the CSS variables so they can be
// referenced in components and Tailwind. Display swap avoids flashes of
// invisible text on slow connections and adjustFontFallback improves
// cross‑platform rendering consistency.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
  adjustFontFallback: true,
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
  preload: true,
  display: "optional",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://la45.example"),
  title: { default: "LA45 — 45‑second live dates", template: "%s · LA45" },
  description: "Live video speed dates. Anonymous until you both match.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "LA45",
    siteName: "LA45",
    description: "Live video speed dates.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "LA45 — 45‑second live dates",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  manifest: "/manifest.webmanifest",
  icons: { icon: "/icon.svg" },
};

// The root layout wraps all pages. It defines the language, fonts and
// provides a skip link for keyboard users. Children are rendered inside
// the <body> so that Tailwind classes apply globally.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {/* Accessible skip link appears on focus and moves keyboard users
            directly to the main content area. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:px-3 focus:py-2 focus:bg-black focus:text-white"
        >
          Skip to main content
        </a>
        <StickyNav />
        {children}
        <AnalyticsConsent />
        <WebVitalsRUM />
      </body>
    </html>
  );
}
