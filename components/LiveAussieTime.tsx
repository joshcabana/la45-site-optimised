"use client";

import { useEffect, useState } from "react";
import { detectAussieTimeZone } from "./utils/formatters";

/**
 * LiveAussieTime shows the current time and date in the user’s Australian
 * timezone. It updates once per minute and uses a pill style for
 * readability. Hidden on small screens to save space.
 */
export default function LiveAussieTime() {
  const [now, setNow] = useState<Date>(() => new Date());
  const tz = detectAussieTimeZone();

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60 * 1000); // update per minute
    return () => clearInterval(id);
  }, []);

  const formatted = new Intl.DateTimeFormat("en-AU", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: tz,
  }).format(now);

  const date = new Intl.DateTimeFormat("en-AU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: tz,
  }).format(now);

  const tzParts = new Intl.DateTimeFormat("en-AU", {
    timeZone: tz,
    timeZoneName: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).formatToParts(now);
  const tzLabel = tzParts.find((p) => p.type === "timeZoneName")?.value || "AET";

  return (
    <div
      aria-label="Live Australian time"
      className="inline-flex items-center px-2 py-1 rounded-full text-xs glass"
    >
      <span className="mr-2">{tzLabel}</span>
      <span className="font-mono">{formatted}</span>
      <span className="mx-1">•</span>
      <span className="font-mono">{date}</span>
    </div>
  );
}
