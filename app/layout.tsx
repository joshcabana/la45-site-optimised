import type { Metadata } from "next";
import "./globals.css";
import StickyNav from "@/components/StickyNav";
import AnalyticsConsent from "@/components/AnalyticsConsent";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";


// Determine the site's base URL. Prefer NEXT_PUBLIC_SITE_URL but fall back to
// the deployment URL (e.g. Vercel) or a reasonable default.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://la45.example");

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
    <html lang="en-AU">
      <body className="font-sans">
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
