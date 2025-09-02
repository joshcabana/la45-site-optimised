"use client";
import { onCLS, onINP, onLCP } from "web-vitals";

export default function WebVitalsRUM() {
  if (typeof window !== "undefined") {
    const report = (metric: any) => {
      fetch("/api/vitals", {
        method: "POST",
        body: JSON.stringify(metric),
        keepalive: true,
      });
    };
    onCLS(report);
    onLCP(report);
    onINP(report);
  }
  return null;
}
