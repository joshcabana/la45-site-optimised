export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://la45.example';
export const canonical = (path: string = '/') => new URL(path, siteUrl).toString();
export const defaultDescription = 'Live video speed dates. Anonymous until you both match.';
