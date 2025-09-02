export default function SafetyAnonymity() {
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
    <section
      id="safety"
      className="mx-auto max-w-6xl px-6 py-16 scroll-mt-24 cv-auto"
      role="region"
      aria-labelledby="safety-title"
    >
      <h2 id="safety-title" className="font-serif text-3xl mb-6">
        Safety &amp; Anonymity
      </h2>
      <div className="grid sm:grid-cols-3 gap-6">
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
    </section>
  );
}
