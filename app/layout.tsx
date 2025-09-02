import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import StickyNav from "@/components/StickyNav";
import { Inter, Playfair_Display } from "next/font/google";

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
  variable: "--font-playfair",
  preload: true,
  display: "swap",
  adjustFontFallback: true,
});

// Expose the site URL via metadata so Open Graph tags resolve correctly
// regardless of environment. Fall back to localhost during development.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

// Ensure preview deployments get correct absolute URLs for og/canonical
export async function generateMetadata(): Promise<Metadata> {
  const h = headers();
  const proto = h.get("x-forwarded-proto") ?? (process.env.NODE_ENV === "development" ? "http" : "https");
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const base = host ? `${proto}://${host}` : siteUrl;
  return {
    metadataBase: new URL(base),
    title: "LA45 — Live 45‑second video speed dating",
    description:
      "Meet in 45 seconds. No swipe, just vibe. Real‑time video intros. Anonymous until it’s mutual.",
    alternates: { canonical: "/" },
    robots: { index: true, follow: true },
    manifest: "/manifest.webmanifest",
    themeColor: "#FFFFFF",
    openGraph: {
      type: "website",
      url: base + "/",
      title: "LA45 — Talk first. Decide fast.",
      description:
        "Video‑first speed dating: 45‑second live calls. No swiping. Anonymous until mutual.",
      images: [
        {
          url: "/og.jpg",
          width: 1200,
          height: 630,
          alt: "LA45 — 45‑second video intros. No swiping.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "LA45 — Talk first. Decide fast.",
      description:
        "45‑second live video intros. No swiping. Anonymous until mutual.",
      images: ["/og.jpg"],
    },
    icons: { icon: "/icon.svg" },
  };
}

// (No static metadata export; generateMetadata above provides dynamic values.)

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
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-gold-500 focus:text-ink focus:rounded-full focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <StickyNav />
        {children}
      </body>
    </html>
  );
}
