import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL!;
  return [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/safety`, changeFrequency: 'monthly' },
    { url: `${base}/privacy`, changeFrequency: 'yearly' },
    { url: `${base}/terms`, changeFrequency: 'yearly' },
  ];
}
