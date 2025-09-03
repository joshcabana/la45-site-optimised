"use client";
import { useEffect, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstBtnRef = useRef<HTMLButtonElement>(null);
  const lastBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const existing = typeof window !== "undefined" ? localStorage.getItem("analytics_consent") : "denied";
    setConsent(existing);
  }, []);

  // Focus trap when the modal opens
  useEffect(() => {
    if (consent === null && firstBtnRef.current) {
      firstBtnRef.current.focus();
    }
  }, [consent]);

  const allow = () => {
    localStorage.setItem("analytics_consent", "granted");
    setConsent("granted");
  };
  const deny = () => {
    localStorage.setItem("analytics_consent", "denied");
    setConsent("denied");
  };

  useEffect(() => {
    if (consent !== null) return;
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        deny();
      }
      if (e.key === "Tab" && firstBtnRef.current && lastBtnRef.current) {
        const first = firstBtnRef.current;
        const last = lastBtnRef.current;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [consent]);

  return (
    <>
      {consent === "granted" && <Analytics />}
      {consent === null && (
        <div
          aria-hidden={false}
          className="fixed inset-0 z-50 grid place-items-center bg-black/50"
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="consent-title"
            aria-describedby="consent-desc"
            tabIndex={-1}
            className="w-[min(92vw,28rem)] rounded-lg bg-white p-5 shadow-xl fade-in"
          >
            <h2 id="consent-title" className="mb-2 text-lg font-semibold">Allow analytics cookies?</h2>
            <p id="consent-desc" className="mb-4 text-sm text-ink/80">
              We use privacy‑friendly analytics to understand performance. No personal data is sold or shared.
            </p>
            <div className="flex justify-end gap-2">
              <button
                ref={firstBtnRef}
                type="button"
                onClick={deny}
                className="px-3 py-2 rounded border focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                Decline
              </button>
              <button
                ref={lastBtnRef}
                type="button"
                onClick={allow}
                className="px-3 py-2 rounded bg-gold-500 text-ink focus-visible:ring-2 focus-visible:ring-gold-500"
              >
                Allow
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
