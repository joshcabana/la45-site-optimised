"use client";

import { useState } from "react";
import { startDonation } from "@/lib/donate";
import { track } from "@/components/utils/analytics";

/**
 * A simple donation banner prompting users to support LA45. It shows a few
 * quick donation amounts and hides itself when dismissed. Analytics and
 * donation functions are stubbed and can be replaced with real
 * integrations.
 */
export default function DonationRibbon() {
  const [hidden, setHidden] = useState(false);
  if (hidden) return null;

  const hide = () => setHidden(true);

  const Button = ({ amt }: { amt: number }) => (
    <button
      onClick={() => {
        track?.("donation_click_amount", { amount: amt });
        startDonation(amt);
      }}
      className="rounded-full border border-ink/20 px-3 py-1 text-sm hover:border-ink/40 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-gold-500/50"
    >
      ${amt}
    </button>
  );

  return (
    <div
      role="region"
      aria-label="Support LA45"
      className="sticky top-0 z-40 border-b border-[rgba(200,164,93,0.25)] bg-white/60 backdrop-blur"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2">
        <p className="text-xs sm:text-sm text-ink/80">
          LA45 is free while in beta. If it helped you meet someone special,
          you can chip in to keep it running ♥
        </p>
        <div className="flex items-center gap-2">
          <Button amt={5} />
          <Button amt={10} />
          <Button amt={25} />
          <button
            onClick={() => {
              track?.("donation_click_custom", {});
              startDonation(0);
            }}
            className="text-xs underline underline-offset-4 opacity-80 hover:opacity-100"
          >
            Custom
          </button>
          <button
            aria-label="Dismiss"
            onClick={hide}
            className="text-xs opacity-60 hover:opacity-100"
          >
            Hide
          </button>
        </div>
      </div>
    </div>
  );
}
