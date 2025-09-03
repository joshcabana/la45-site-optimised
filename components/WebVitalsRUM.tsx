"use client";
import { useEffect } from "react";
import { onCLS, onINP, onLCP } from "web-vitals";

/**
 * Reports Core Web Vitals to an API endpoint for analysis.
 * Front‑end only: uses navigator.sendBeacon if available.
 */
export default function WebVitalsRUM() {
  useEffect(() => {
    const report = (metric: any) => {
      const body = JSON.stringify(metric);
      const url = "/api/vitals";
      if (navigator.sendBeacon) {
        navigator.sendBeacon(url, body);
      } else {
        fetch(url, { method: "POST", body, keepalive: true, headers: { "Content-Type": "application/json" } }).catch(() => {});
      }
    };
    onCLS(report);
    onINP(report);
    onLCP(report);
  }, []);
  return null;
}

