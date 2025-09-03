export const metadata = {
  title: "How it works · LA45",
  description: "Live, 45-second video intros. Anonymous until mutual match.",
};

export default function Page() {
  const items = [
    { title: "Join the live queue", body: "Hop in when you’re ready—no endless feeds." },
    { title: "45‑second video", body: "A creative limit that keeps things energetic and fair." },
    { title: "If it clicks, extend or match", body: "Only with mutual consent. Otherwise, move on politely." },
  ];

  return (
    <main id="main" className="mx-auto max-w-4xl px-4 py-16">
      <h1 id="how" className="text-3xl md:text-4xl font-semibold tracking-tight">
        How it works
      </h1>
      <ol className="mt-8 grid sm:grid-cols-3 gap-6 list-decimal list-inside">
        {items.map((i, idx) => (
          <li
            key={idx}
            className="rounded-2xl border border-[rgba(200,164,93,0.22)] bg-black/5 p-6"
          >
            <h3 className="font-serif text-xl">{i.title}</h3>
            <p className="mt-2 text-ink/80">{i.body}</p>
            {idx === 2 && (
              <p className="mt-3 text-xs text-ink/60">
                Pseudonymity by default • Tokens to start/extend • Block/Report one tap away
              </p>
            )}
          </li>
        ))}
      </ol>
    </main>
  );
}
