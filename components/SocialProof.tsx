"use client";

export default function SocialProof() {
  return (
    <section
      className="mx-auto max-w-6xl px-6 py-16 cv-auto"
      aria-labelledby="social-title"
    >
      <h2 id="social-title" className="sr-only">
        Social proof
      </h2>
      <div className="grid sm:grid-cols-3 gap-6">
        <blockquote className="rounded-2xl border border-gold/20 bg-paper p-6">
          <p>“Way better than swiping.”</p>
        </blockquote>
        <blockquote className="rounded-2xl border border-gold/20 bg-paper p-6">
          <p>“Real vibes quickly.”</p>
        </blockquote>
        <div className="rounded-2xl border border-gold/20 bg-paper p-6">
          <p className="text-sm text-ink/70">Queue time avg.</p>
          <p className="text-4xl font-serif text-gold">~2 min</p>
          <p className="text-sm text-ink/70 mt-1">% calls that extend</p>
          <p className="text-4xl font-serif text-gold">~38%</p>
        </div>
      </div>
    </section>
  );
}
