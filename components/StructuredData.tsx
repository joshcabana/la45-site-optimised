"use client";

export default function StructuredData() {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://la45.app");
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LA45',
    url: base,
    logo: `${base}/logo.png`,
    slogan: '45-second live speed-dates',
    description: 'Live video speed dates. Anonymous until you both match.',
  } as const;
  const site = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'LA45',
    url: base,
    inLanguage: 'en-AU',
    description: '45-second live speed-dates',
  } as const;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(site) }}
      />
    </>
  );
}
