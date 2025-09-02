// Analytics stub. Replace with your analytics provider (e.g. Plausible,
// Amplitude) as desired. Calls are logged to the console for now.
export function track(event: string, data: Record<string, any> = {}) {
  console.log(`Analytics event: ${event}`, data);
}