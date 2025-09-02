export default function QueueExplainer() {
  const items = [
    { title: "Join the live queue", body: "Hop in when you’re ready—no endless feeds." },
    { title: "45‑second video", body: "A creative limit that keeps things energetic and fair." },
    { title: "If it clicks, extend or match", body: "Only with mutual consent. Otherwise, move on politely." },
  ];

  return (
    <section
      id="how"
      className="mx-auto max-w-6xl px-6 py-16 scroll-mt-24 cv-auto"
      role="region"
      aria-labelledby="how-title"
    >
      <h2 id="how-title" className="font-serif text-3xl mb-8">
        How it works
      </h2>
      <ol className="grid sm:grid-cols-3 gap-6 list-decimal list-inside">
        {items.map((i, idx) => (
          <li
            key={idx}
            className="rounded-2xl border border-[rgba(200,164,93,0.22)] bg-black/5 p-6"
          >
            <h3 className="font-serif text-xl">{i.title}</h3>
            <p className="mt-2 text-ink/80">{i.body}</p>
            {idx === 2 && (
              <p className="mt-3 text-xs text-ink/60">
                Pseudonymity by default • Tokens to start/extend • Block/Report
                one tap away
              </p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
