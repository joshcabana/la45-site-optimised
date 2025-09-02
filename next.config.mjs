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
