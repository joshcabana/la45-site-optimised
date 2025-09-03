"use client";

import { formatAUD } from "./utils/formatters";

type Pack = { name: string; tokens: number; price: number; badge?: string };

const packs: Pack[] = [
  { name: "Small", tokens: 50, price: 5 },
  { name: "Medium", tokens: 120, price: 10, badge: "Best value" },
  { name: "Large", tokens: 300, price: 20 },
];

export default function TokenPacks() {
  return (
    <section
      id="token-packs"
      className="mx-auto max-w-6xl px-6 py-16 scroll-mt-24"
      aria-labelledby="tokens-title"
    >
      <div className="flex items-end justify-between gap-4 mb-6">
        <h2 id="tokens-title" className="font-serif text-3xl">
          Token packs
        </h2>
        <p className="text-sm text-ink/70">
          New users get a small bonus to start.
        </p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {packs.map((p, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-gold/20 bg-ink/5 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl">{p.name}</h3>
                {p.badge && (
                  <span className="text-xs px-2 py-1 rounded-full bg-gold text-ink">
                    {p.badge}
                  </span>
                )}
              </div>
              <p className="mt-2 text-5xl font-serif text-gold">
                {p.tokens}
                <span className="text-base text-ink/70 align-super">
                  {' '}tokens
                </span>
              </p>
              <p className="mt-1 text-ink/80">{formatAUD(p.price)} AUD</p>
              <ul className="mt-4 text-sm text-ink/70 list-disc list-inside space-y-1">
                <li>Start a call</li>
                <li>
                  Extend to <b>2</b> or <b>5</b> minutes (mutual)
                </li>
                <li>Optional queue boost</li>
              </ul>
            </div>
            <button
              className="mt-6 inline-flex items-center justify-center rounded-full border border-gold/40 hover:border-gold/60 bg-ink/30 hover:bg-ink/40 px-5 py-3 text-sm min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-disabled="true"
              title="Purchases disabled in beta"
              onClick={() => console.log("Disabled in beta")}
            >
              Buy (beta disabled)
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
