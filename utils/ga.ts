'use client';
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';

const ALLOWED_EVENTS = new Set([
  'enter_queue_click',
  'signup_click',
  'donation_select',
  'donation_confirm',
]);

function sanitizeParams(name: string, params?: Record<string, any>) {
  if (!params) return undefined;
  // Only allow numeric amount for donation events; drop everything else
  if (name === 'donation_select' || name === 'donation_confirm') {
    const amt = Number(params.amount);
    return Number.isFinite(amt) ? { amount: amt } : undefined;
  }
  return undefined; // no params for other events
}

export function pageview(path: string) {
  if (!GA_ID || typeof window === 'undefined' || !('gtag' in window)) return;
  // @ts-ignore
  window.gtag('config', GA_ID, { page_path: path });
}

export function track(name: string, params?: Record<string, any>) {
  if (!GA_ID || typeof window === 'undefined' || !('gtag' in window)) return;
  if (!ALLOWED_EVENTS.has(name)) return; // guardrail: allowlisted events only
  const safeParams = sanitizeParams(name, params);
  // @ts-ignore
  window.gtag('event', name, safeParams);
}

// Back-compat for existing imports
export const gaEvent = track;
