"use client";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState<string | null>(null);
  useEffect(() => {
    setConsent(typeof window !== "undefined" ? localStorage.getItem("analytics_consent") : "denied");
  }, []);
  const allow = () => {
    localStorage.setItem("analytics_consent", "granted");
    setConsent("granted");
  };
  const deny = () => {
    localStorage.setItem("analytics_consent", "denied");
    setConsent("denied");
  };
  return (
    <>
      {consent === "granted" && (
        <>
          <SpeedInsights />
          <Analytics />
        </>
      )}
      {consent === null && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-sm w-full bg-white shadow-lg p-4 rounded">
          <p className="mb-2 text-sm">Allow analytics cookies?</p>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={allow}
              className="px-3 py-1 rounded bg-gold-500 text-ink focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              Allow
            </button>
            <button
              type="button"
              onClick={deny}
              className="px-3 py-1 rounded border focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
