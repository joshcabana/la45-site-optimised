"use client";
import { useEffect, useState } from "react";

type Stats = { labels: string[]; counts: number[] };

export default function QueueStats() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/queue-stats", { next: { revalidate: 60 } });
        if (!res.ok) return;
        const data = (await res.json()) as Stats;
        if (!cancelled) setStats(data);
      } catch {}
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!stats) return null;

  return (
    <section aria-labelledby="queue-stats" className="mx-auto max-w-5xl px-6 py-8">
      <h2 id="queue-stats" className="mb-3 text-sm uppercase tracking-wide text-ink/60">
        Last 7 days
      </h2>
      <div className="grid grid-cols-7 gap-2">
        {stats.labels.map((l, i) => (
          <div key={l} className="text-center">
            <div
              className="mx-auto h-20 w-6 rounded bg-gold-500/70"
              style={{ height: `${Math.max(8, Math.min(80, stats.counts[i]))}px` }}
              aria-hidden
            />
            <div className="mt-1 text-xs text-ink/70">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

