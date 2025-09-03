import StructuredData from "@/components/StructuredData";
export const metadata = { title: 'Safety | LA45' };

export default function SafetyPage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-24 space-y-10">
      <StructuredData />
      <h1 className="font-serif text-3xl mb-4">Safety</h1>
      <section>
        <h2 className="font-serif text-2xl mb-2">Community Guidelines</h2>
        <p className="text-ink/80">Be kind, keep it classy and report bad behaviour. LA45 is for respectful, open‑minded daters.</p>
      </section>
      <section>
        <h2 className="font-serif text-2xl mb-2">Safety Features</h2>
        <ul className="list-disc list-inside space-y-2 text-ink/80">
          <li>Faces stay blurred until you both match.</li>
          <li>Report or block with one tap.</li>
        </ul>
      </section>
      <section>
        <h2 className="font-serif text-2xl mb-2">Privacy &amp; Data</h2>
        <p className="text-ink/80">Calls aren’t recorded and we keep only what we need to run LA45. Read the <a href="/privacy" className="gold-underline">full privacy policy</a>.</p>
      </section>
    </main>
  );
}
