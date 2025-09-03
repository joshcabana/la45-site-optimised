export const metadata = { title: "Terms of Service | LA45" };

/**
 * The terms of service outline the contractual relationship between you and
 * LA45. They explain eligibility, the role of tokens and limitations of
 * liability. These highlights provide clarity but are not exhaustive.
 */
import StructuredData from "@/components/StructuredData";

export default function TermsPage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-24 space-y-6">
      <StructuredData />
      <h1 className="font-serif text-3xl mb-4">Terms of Service</h1>
      <p className="text-ink/80">By using LA45 you agree to these terms.</p>
      <ul className="list-disc list-inside space-y-3 text-ink/80">
        <li><strong>Eligibility:</strong> 18+ only. You must be able to form a legally binding contract.</li>
        <li><strong>Acceptable use:</strong> Follow the Community Guidelines. No illegal activity, harassment, or unsafe behaviour.</li>
        <li><strong>No recordings:</strong> Do not record or screenshot calls.</li>
        <li><strong>Tokens:</strong> During beta, tokens are non‑refundable and have no cash value. They may be adjusted or withdrawn.</li>
        <li><strong>Service availability:</strong> LA45 is provided “as‑is” during beta. Features may change or be removed.</li>
        <li><strong>Termination:</strong> We may suspend or terminate accounts for breaches, including device‑level and IP‑based restrictions.</li>
        <li><strong>ACL:</strong> Nothing in these terms limits your rights under the Australian Consumer Law.</li>
        <li><strong>Governing law:</strong> New South Wales (or ACT) law governs these terms. Disputes may be raised via <a href="mailto:hello@la45.app" className="gold-underline">hello@la45.app</a>.</li>
      </ul>
      <p className="text-ink/60 text-sm">Last updated: {new Date().toLocaleDateString("en-AU")}.</p>
    </main>
  );
}
