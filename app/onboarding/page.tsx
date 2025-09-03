"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { gaEvent } from "@/utils/ga";

/**
 * This onboarding flow guides new users through a few short steps before
 * entering the live queue. It checks that the user is an adult, asks
 * them to accept community rules, lets them choose a pseudonymous handle,
 * offers a simple camera/mic test placeholder and finally presents
 * sign‑in options. Each step updates the `data-step` attribute on
 * the surrounding region so screen readers announce progress. Buttons
 * are disabled until prerequisites are met and focusable for
 * keyboard users. The design mirrors the rest of the site with
 * generous spacing, high‑contrast colours and rounded controls.
 */
type Step = "age" | "rules" | "handle" | "device" | "done";

export default function OnboardingPage() {
  const [step, setStep] = useState<Step>("age");
  const [isAdult, setIsAdult] = useState<boolean>(false);
  const [rulesAccepted, setRulesAccepted] = useState<boolean>(false);
  const [handle, setHandle] = useState<string>("");

  // Update the live region attribute whenever the step changes. This
  // subtle announcement helps screen readers understand progress.
  useEffect(() => {
    const region = document.getElementById("onboarding-region");
    if (region) {
      region.setAttribute("data-step", step);
    }
  }, [step]);

  return (
    <main id="main">
      <div
        id="onboarding-region"
        className="mx-auto max-w-3xl px-6 py-16 space-y-10"
        role="region"
        aria-live="polite"
      >
      <h1 className="font-serif text-3xl mb-2">Join the queue</h1>

      {/* Step 1: Age confirmation */}
      {step === "age" && (
        <section className="space-y-6">
          <h2 className="font-serif text-2xl">Are you 18 or older?</h2>
          <p className="text-ink/80">
            You must be at least 18 years old to use LA45.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => {
                setIsAdult(true);
                setStep("rules");
              }}
              className="rounded-full bg-gold text-ink px-6 py-3 min-h-[44px] hover:opacity-90 focus-visible:ring-2 focus-visible:ring-gold"
            >
              Yes
            </button>
            <button
              onClick={() => {
                setIsAdult(false);
                alert("You must be 18+ to use this service.");
              }}
              className="rounded-full border border-ink/20 px-6 py-3 min-h-[44px] text-ink hover:border-ink/40 focus-visible:ring-2 focus-visible:ring-gold"
            >
              No
            </button>
          </div>
        </section>
      )}

      {/* Step 2: Accept rules */}
      {step === "rules" && (
        <section className="space-y-6">
          <h2 className="font-serif text-2xl">Accept the rules</h2>
          <p className="text-ink/80">
            No indecency, no recording or screenshots, be respectful.
          </p>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={rulesAccepted}
              onChange={(e) => setRulesAccepted(e.target.checked)}
              className="h-5 w-5 accent-gold"
            />
            <span>I accept the rules</span>
          </label>
          <button
            onClick={() => setStep("handle")}
            disabled={!rulesAccepted}
            className="mt-4 rounded-full bg-gold text-ink px-6 py-3 min-h-[44px] disabled:opacity-50 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-gold"
          >
            Continue
          </button>
        </section>
      )}

      {/* Step 3: Choose handle */}
      {step === "handle" && (
        <section className="space-y-6">
          <h2 className="font-serif text-2xl">Choose a handle</h2>
          <input
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            placeholder="e.g. beachrunner"
            className="w-full rounded-xl bg-ink/5 border border-ink/10 px-4 py-3 outline-none focus-visible:ring-2 focus-visible:ring-gold"
          />
          <p className="text-ink/60 text-sm">
            Share real details only after a mutual match.
          </p>
          <button
            onClick={() => setStep("device")}
            disabled={!handle}
            className="rounded-full bg-gold text-ink px-6 py-3 min-h-[44px] disabled:opacity-50 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-gold"
          >
            Continue
          </button>
        </section>
      )}

      {/* Step 4: Device test (placeholder) */}
      {step === "device" && (
        <section className="space-y-6">
          <h2 className="font-serif text-2xl">Camera &amp; Mic test</h2>
          <p className="text-ink/80">
            Run a quick camera/mic test. (Video integration coming soon.)
          </p>
          <button
            onClick={() => setStep("done")}
            className="rounded-full bg-gold text-ink px-6 py-3 min-h-[44px] hover:opacity-90 focus-visible:ring-2 focus-visible:ring-gold"
          >
            Run test
          </button>
        </section>
      )}

      {/* Step 5: Completed */}
      {step === "done" && (
        <section className="space-y-6">
          <h2 className="font-serif text-2xl">All set</h2>
          <p className="text-ink/80">
            Queue access is gated behind sign in during beta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/queue?guest=1"
              onClick={() => gaEvent("enter_queue_click")}
              className="rounded-full bg-gold text-ink px-6 py-3 min-h-[44px] text-center hover:opacity-90 focus-visible:ring-2 focus-visible:ring-gold"
            >
              Continue as guest (limited)
            </Link>
            <Link
              href="/queue"
              onClick={() => gaEvent("enter_queue_click")}
              className="rounded-full border border-ink/20 px-6 py-3 min-h-[44px] text-center hover:border-ink/40 focus-visible:ring-2 focus-visible:ring-gold"
            >
              Sign in to join queue
            </Link>
          </div>
          <p className="text-ink/60 text-sm">
            Auth options later: Email magic link, Apple/Google one‑tap, optional phone OTP.
          </p>
          <Link
            href="/"
            className="inline-block mt-4 underline text-ink/70 gold-underline hover:text-ink"
          >
            Back home
          </Link>
        </section>
      )}
      </div>
    </main>
  );
}
