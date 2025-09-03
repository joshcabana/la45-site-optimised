import type { Metadata } from "next";
import "./globals.css";
import StickyNav from "@/components/StickyNav";
import AnalyticsConsent from "@/components/AnalyticsConsent";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { fontVars } from "./fonts";
import WebVitalsRUM from "@/components/WebVitalsRUM";


// Determine the site's base URL. Prefer NEXT_PUBLIC_SITE_URL but fall back to
// the deployment URL (e.g. Vercel) or a reasonable default.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://la45.app");

// Fonts are loaded via app/fonts.ts and applied as CSS variables on <html>.

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "LA45 — 45‑second live dates", template: "%s · LA45" },
  description: "Live video speed dates. Anonymous until you both match.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "LA45",
    siteName: "LA45",
    description: "Live video speed dates.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LA45",
    description: "Live video speed dates.",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
};

// The root layout wraps all pages. It defines the language and provides a
// skip link for keyboard users. Children are rendered inside the <body> so
// that Tailwind classes apply globally.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${fontVars}`}>
      <body className={`min-h-full font-sans antialiased bg-black text-zinc-100`}>
        {/* Accessible skip link appears on focus and moves keyboard users
            directly to the main content area. */}
        <a
          href="#main"
          className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:px-3 focus-visible:py-2 focus-visible:bg-black focus-visible:text-white focus-visible:ring-2 focus-visible:ring-gold-500"
        >
          Skip to main content
        </a>
        <StickyNav />
        {children}
        {/* Speed insights are safe to include globally for performance telemetry */}
        <SpeedInsights />
        {/* Cookie/analytics consent modal (Analytics is gated within) */}
        <AnalyticsConsent />
        {/* Front-end only RUM for Core Web Vitals */}
        <WebVitalsRUM />
      </body>
    </html>
  );
}
