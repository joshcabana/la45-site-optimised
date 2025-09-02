"use client";

import DonationRibbon from "./DonationRibbon";
import { SHOW_DONATION_RIBBON, DONATION_RIBBON_SCOPE } from "@/lib/flags";

/**
 * Mount this component where you want the DonationRibbon to show. It
 * respects feature flags defined in lib/flags.ts and optional location
 * scoping so that ribbons only appear on certain pages (e.g. home or
 * queue). If donations are disabled, null is returned.
 */
export default function DonationMount({ location = "home" }: { location?: "home" | "queue" | "other" }) {
  if (!SHOW_DONATION_RIBBON) return null;
  if (DONATION_RIBBON_SCOPE === "queue" && location !== "queue") return null;
  return <DonationRibbon />;
}