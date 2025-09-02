"use client";

import { useInView } from "./hooks/useInView";

function Card({ title, body, delay }: { title: string; body: string; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`p-6 rounded-2xl border border-[rgba(200,164,93,0.22)] bg-black/40 transition-opacity duration-700 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="font-serif text-xl mb-2">{title}</h3>
      <p className="text-ink/80">{body}</p>
    </div>
  );
}

export default function ValueProps() {
  return (
    <section
      className="mx-auto max-w-6xl px-6 py-16 cv-auto"
      aria-labelledby="vp-title"
    >
      <h2 id="vp-title" className="font-serif text-3xl mb-6">
        45 seconds. Real connection.
      </h2>
      <div className="grid sm:grid-cols-3 gap-6">
        <Card
          title="Talk first"
          body="Short live calls for quick chemistry checks—decide fast."
          delay={0}
        />
        <Card
          title="No swiping"
          body="Join a live queue and meet real people in real time."
          delay={150}
        />
        <Card
          title="Anonymous until mutual"
          body="Use a handle; reveal only when both say yes."
          delay={300}
        />
      </div>
    </section>
  );
}
