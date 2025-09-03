'use client';
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export function pageview(path: string) {
  if (!GA_ID || typeof window === 'undefined' || !('gtag' in window)) return;
  // @ts-ignore
  window.gtag('config', GA_ID, { page_path: path });
}

export function gaEvent(name: string, params?: Record<string, any>) {
  if (!GA_ID || typeof window === 'undefined' || !('gtag' in window)) return;
  // @ts-ignore
  window.gtag('event', name, params);
}
