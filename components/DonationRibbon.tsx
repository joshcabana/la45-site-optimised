"use client";

import { useState } from "react";
import { startDonation } from "@/lib/donate";
import { gaEvent } from "@/utils/ga";

/**
 * A simple donation banner prompting users to support LA45. It shows a few
 * quick donation amounts and hides itself when dismissed. Analytics and
 * donation functions are stubbed and can be replaced with real
 * integrations.
 */
export default function DonationRibbon() {
  const [hidden, setHidden] = useState(false);
  const [amount, setAmount] = useState<number | null>(null);
  if (hidden) return null;

  const hide = () => setHidden(true);
  const confirm = () => {
    if (amount == null) return;
    gaEvent("donation_confirm", { amount });
    startDonation(amount);
  };

  return (
    <div
      role="region"
      aria-label="Support LA45"
      className="sticky top-0 z-40 border-b border-gold/25 bg-paper/60 backdrop-blur"
    >
      <form className="mx-auto grid max-w-5xl items-center gap-3 px-4 py-2 sm:grid-cols-[1fr_auto_auto]">
        <fieldset className="contents">
          <legend className="sr-only">Support LA45</legend>
          <p className="text-xs sm:text-sm text-ink/80 sm:col-start-1 sm:row-start-1">
            LA45 is free while in beta. If it helped you meet someone special, you can chip in ♥
          </p>
          <div className="flex items-center gap-2 sm:justify-self-end sm:col-start-2 sm:row-start-1">
            {[5, 10, 25].map((amt) => (
              <label key={amt} className="inline-flex items-center gap-1 text-xs">
                <input
                  type="radio"
                  name="donation"
                  value={amt}
                  onChange={() => {
                    setAmount(amt);
                    gaEvent("donation_select", { amount: amt });
                  }}
                  className="h-4 w-4 accent-[var(--color-gold-500)]"
                />
                <span>${amt}</span>
              </label>
            ))}
          </div>
          <div className="flex items-center gap-3 sm:justify-self-end sm:col-start-3 sm:row-start-1">
            <button
              type="button"
              onClick={confirm}
              disabled={amount == null}
              className="rounded-full bg-gold text-ink px-3 py-1 text-xs min-h-[44px] disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Donate
            </button>
            <button
              type="button"
              aria-label="Hide support prompt"
              onClick={hide}
              className="text-xs opacity-60 hover:opacity-100 min-h-[44px] px-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
            >
              Hide
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
