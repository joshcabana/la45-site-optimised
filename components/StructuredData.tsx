"use client";

export default function StructuredData() {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://la45-site-optimised.vercel.app";
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LA45',
    url: base,
    logo: `${base}/logo.png`,
  };
  const app = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'LA45',
    applicationCategory: 'DatingApplication',
    operatingSystem: 'Web',
    inLanguage: 'en-AU',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'AUD' },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(app) }}
      />
    </>
  );
}
