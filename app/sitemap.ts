import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://la45-site-optimised.vercel.app';
  const now = new Date();
  const routes = ['', 'how-it-works', 'safety', 'faq', 'guidelines', 'privacy', 'terms'];
  return routes.map((p) => ({
    url: `${base}/${p}`.replace(/\/$/, ''),
    lastModified: now,
    changeFrequency: p === '' ? 'weekly' : 'monthly',
    priority: p === '' ? 1 : 0.6,
  }));
}
