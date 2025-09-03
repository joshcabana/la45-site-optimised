export const metadata = {
  title: "Safety · LA45",
  description: "How LA45 keeps you safe and anonymous before mutual match.",
};

export default function Page() {
  const pillars = [
    {
      title: "Anonymity before mutual match",
      body: "Handles by default; share details only when both opt in.",
    },
    {
      title: "Strict rules",
      body: "Zero‑tolerance anti‑indecency policy. Clear, enforced session rules.",
    },
    {
      title: "Instant tools",
      body: "End, Block, and Report are always visible and one tap away.",
    },
  ];

  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-16">
      <h1 id="safety" className="text-3xl md:text-4xl font-semibold tracking-tight">
        Safety &amp; Anonymity
      </h1>
      <div className="mt-8 grid sm:grid-cols-3 gap-6">
        {pillars.map((p, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-[rgba(200,164,93,0.22)] bg-black/5 p-6"
          >
            <h3 className="font-serif text-xl">{p.title}</h3>
            <p className="mt-2 text-ink/80">{p.body}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-ink/60">
        Read the
        <a href="/guidelines" className="gold-underline ml-1">
          Community Guidelines
        </a>
        .
      </p>
    </main>
  );
}
