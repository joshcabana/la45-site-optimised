// Flags controlling optional features. These can be toggled per deployment.
// Set to true to display the donation ribbon.
export const SHOW_DONATION_RIBBON = true;

// Scope for showing the donation ribbon: 'home' shows only on the home page,
// 'queue' would show on the queue page. Currently only 'home' is used.
export const DONATION_RIBBON_SCOPE: "home" | "queue" | "other" = "home";