import Link from "next/link";
import { formatDateAU } from "@/components/utils/formatters";

type QA = { q: string; a: string };

const sections: { title: string; items: QA[] }[] = [
  {
    title: "Experience",
    items: [
      { q: "What is LA45 in one line?", a: "Live, 45‑second video intros—no swiping. If you both tap Extend, the call continues for up to five minutes." },
      { q: "Why 45 seconds?", a: "It’s long enough to feel the vibe, short enough to skip the small talk. Chemistry first, profiles second." },
      { q: "How does matching work without swiping?", a: "Set preferences (age, distance, gender). We queue you into live calls when both sides are available—no scores, no popularity meters." },
      { q: "Can I blur my background?", a: "Yes on most modern devices. You can also switch to voice‑only during beta, though matches will be limited." },
      { q: "What happens after five minutes?", a: "You’ll see Connect and Pass. Connect is mutual—if both tap it, a private chat opens so you can plan a proper date." },
      { q: "What if only one of us taps Extend?", a: "No extend occurs. You’ll be moved to the next call—no penalty." },
      { q: "What if someone hangs up early or the call drops?", a: "You won’t be charged any tokens for that call. We auto‑requeue you and review for abuse patterns." },
      { q: "Device & connection tips", a: "Use headphones, strong Wi‑Fi/5G, good lighting, and a steady, front‑facing camera. Background blur can help in shared spaces." },
      { q: "Events & themed nights", a: "We host occasional themed queues (e.g., City Nights, Interests, Age bands). Opt in from the home screen." },
    ],
  },
  {
    title: "Tokens & Payments",
    items: [
      { q: "What are tokens and what do they do?", a: "Tokens power optional features like Extend (and later: queue boosts). You’ll get a small daily allotment; you can top up any time." },
      { q: "How do I extend a call?", a: "Extend is optional and token‑based. If both tap Extend in the last 10 seconds of your 45‑second call, it continues for up to five minutes." },
      { q: "How do payments work?", a: "We use secure, PCI‑compliant checkout (e.g., Apple/Google Pay or card via Stripe). Pricing is shown in AUD. No surprise subscriptions during beta." },
    ],
  },
  {
    title: "Privacy",
    items: [
      { q: "Am I anonymous before a match?", a: "Yes. Only your first name (or alias) is shown during the 45 seconds. No socials are shared unless both people choose to connect after." },
      { q: "Is any video or audio stored?", a: "No recordings. We keep minimal metadata (time, duration, device/network basics) strictly for safety and moderation. We never sell personal data or run third‑party ad tracking." },
      { q: "Can I delete my account and data?", a: "Any time in Settings. We delete personal info unless retention is required for fraud, abuse prevention, or legal reasons." },
    ],
  },
  {
    title: "Safety",
    items: [
      { q: "How do I block/report?", a: "Tap Block/Report during or after a call—one tap. We triage fast, enforce rules, and permanently remove repeat offenders." },
      { q: "What behaviour is not allowed?", a: "No harassment, hate, sexual content, nudity, or unsafe behaviour (e.g., calling while driving). Zero tolerance." },
      { q: "Safety in public places", a: "Meet in public, tell a friend, and use in‑app chat first. We never ask for money or codes. If someone does—report them." },
    ],
  },
  {
    title: "Accessibility",
    items: [
      { q: "Accessibility", a: "Captions, screen‑reader labels, large‑text support, and colour‑contrast compliant UI. Tell us what would help you—we prioritise accessibility fixes." },
    ],
  },
  {
    title: "Policies",
    items: [
      { q: "Who can use LA45?", a: "18+ only. Australia first while in beta. We’ll expand gradually." },
      { q: "Do you verify age or identity?", a: "Yes—basic age checks are required; additional verification may be requested for safety or if accounts are flagged." },
      { q: "Can I control who sees me?", a: "Yes—filters for distance, age, gender, and ‘Travel Mode’ (meet people in another city before you arrive) are available or coming soon." },
      { q: "How do I get help?", a: "In‑app Help & Safety → Contact. For urgent risk or immediate danger, contact emergency services first." },
    ],
  },
];

export default function FAQ() {
  const lastUpdated = formatDateAU(new Date());
  return (
    <section
      id="faq"
      className="mx-auto max-w-4xl px-6 py-16 scroll-mt-24 cv-auto"
      role="region"
      aria-labelledby="faq-title"
    >
      <h2 id="faq-title" className="font-serif text-3xl mb-6">
        FAQ
      </h2>

      {/* Slim Code of Conduct (zero‑tolerance language) */}
      <div className="mb-8 rounded-2xl border border-[rgba(200,164,93,0.22)] bg-black/5 p-6">
        <h3 className="font-serif text-xl mb-2">Code of Conduct</h3>
        <ul className="list-disc list-inside text-ink/80 space-y-1">
          <li>Be respectful. No harassment or hate.</li>
          <li>No nudity, sexual content, or unsafe behaviour.</li>
          <li>No recording or screenshots of calls.</li>
          <li>Use Block/Report for issues—moderation is swift.</li>
          <li>18+ only; breaking rules leads to removal.</li>
        </ul>
      </div>

      {/* Grouped FAQs */}
      <div className="space-y-8">
        {sections.map((s, si) => (
          <div key={si}>
            <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
            <div className="space-y-4">
              {s.items.map((f, i) => (
                <details
                  key={`${si}-${i}`}
                  className="rounded-2xl border border-[rgba(200,164,93,0.22)] bg-black/5 p-6"
                >
                  <summary className="cursor-pointer font-medium">{f.q}</summary>
                  <p className="mt-2 text-ink/80">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer links and timestamp */}
      <p className="mt-8 text-sm text-ink/60">
        Last updated: {lastUpdated}. See our
        <Link href="/guidelines" className="gold-underline mx-1">Community Guidelines</Link>
        •
        <Link href="/privacy" className="gold-underline mx-1">Privacy</Link>
        •
        <Link href="/terms" className="gold-underline ml-1">Terms</Link>.
      </p>
    </section>
  );
}
