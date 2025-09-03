/**
 * Hardened Next.js config with strong security headers and perf hints.
 *
 * Notes:
 * - If adding 3rd‑party scripts (e.g. Stripe), extend CSP `script-src` and
 *   `connect-src` accordingly and pin exact origins. Avoid wide wildcards.
 * - For WebRTC, you may need to allow TURN/WebSocket endpoints in
 *   `connect-src`. There is no CSP directive for STUN; browsers ignore it.
 */

const csp = [
  "default-src 'self'",
  // Keep inline styles for Tailwind's preflight/utilities that set style attributes
  "style-src 'self' 'unsafe-inline'",
  // Vercel Analytics/Speed Insights
  "script-src 'self' 'unsafe-inline' https://cdn.vercel-insights.com",
  // Images and media
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https:",
  // Allow XHR/fetch to same‑origin and Vercel insights endpoints
  "connect-src 'self' https://cdn.vercel-insights.com https://vitals.vercel-insights.com",
  // Prevent being embedded
  "frame-ancestors 'none'",
  // Best effort upgrade of http resources
  "upgrade-insecure-requests",
  // If using WebRTC TURN/WebSocket backends, add e.g.:
  // "connect-src 'self' https://cdn.vercel-insights.com https://vitals.vercel-insights.com wss://your-turn.example",
  // If using Stripe, add:
  // "script-src 'self' 'unsafe-inline' https://js.stripe.com",
  // "frame-src https://js.stripe.com https://hooks.stripe.com",
].join("; ");

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Content-Security-Policy", value: csp },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24, // 1 day
  },
  async headers() {
    return [
      // Global security headers
      { source: "/:path*", headers: securityHeaders },

      // Narrow Permissions-Policy: allow camera/microphone only on call routes
      {
        source: "/call/:path*",
        headers: [
          { key: "Permissions-Policy", value: "camera=(self), microphone=(self), geolocation=()" },
        ],
      },

      // Deny camera/microphone elsewhere by default
      {
        source: "/((?!call).*)",
        headers: [
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },

      // Cache heavier public assets moderately. Public assets are not hashed,
      // so avoid immutable; rely on a 7-day cache with SWR.
      {
        source: "/photos/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" },
        ],
      },
    ];
  },
};

export default nextConfig;

