/**
 * Helper functions for formatting currency, dates and timezones. Keeping
 * these in a dedicated file avoids repeating Intl.NumberFormat logic
 * throughout components and centralises fallbacks for Aussie contexts.
 */
export function formatAUD(value: number): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatDateAU(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export function detectAussieTimeZone(): string {
  // Prefer Sydney as default for AU east coast
  const preferred = "Australia/Sydney";
  try {
    // If user is already in an AU tz, keep it, else fall back to Sydney.
    const cur = Intl.DateTimeFormat().resolvedOptions().timeZone || preferred;
    return cur.includes("Australia/") ? cur : preferred;
  } catch {
    return preferred;
  }
}