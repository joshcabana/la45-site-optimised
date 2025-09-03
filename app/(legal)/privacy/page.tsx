export const metadata = { title: "Privacy Policy | LA45" };

/**
 * A simple privacy policy outlining how LA45 handles user data. This page
 * isn’t a substitute for formal legal counsel but provides clear,
 * human‑readable principles: minimal data collection, no recording and
 * respect for participant privacy. Feel free to expand or refine these
 * clauses based on regulatory requirements.
 */
import StructuredData from "@/components/StructuredData";

export default function PrivacyPage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-24 space-y-6">
      <StructuredData />
      <h1 className="font-serif text-3xl mb-4">Privacy Policy</h1>
      <p className="text-ink/80">
        This policy explains how LA45 handles your personal information in Australia in line with
        the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
      </p>
      <h2 className="font-serif text-2xl mt-6">Who we are</h2>
      <p className="text-ink/80">
        LA45 operates in Australia. Contact us any time at
        <a href="mailto:hello@la45.app" className="gold-underline ml-1">hello@la45.app</a>.
      </p>
      <h2 className="font-serif text-2xl mt-6">What we collect and why</h2>
      <ul className="list-disc list-inside space-y-2 text-ink/80">
        <li><strong>Account and preferences</strong> (handle, age band, filters) to run the service.</li>
        <li><strong>Safety and technical logs</strong> (timestamps, device/network basics, abuse flags) to keep LA45 safe.</li>
        <li><strong>Payments</strong> (via PCI‑compliant providers) if you buy tokens; we do not store card details.</li>
      </ul>
      <h2 className="font-serif text-2xl mt-6">No call recordings</h2>
      <p className="text-ink/80">Live calls are not recorded or stored. Once a call ends, it’s gone.</p>
      <h2 className="font-serif text-2xl mt-6">Use and disclosure</h2>
      <p className="text-ink/80">
        We use your data to operate LA45, maintain safety, and improve performance. We do not sell
        personal data. We may disclose information where required by law or to address serious
        harms (e.g., to the eSafety Commissioner or law enforcement).
      </p>
      <h2 className="font-serif text-2xl mt-6">Security and retention</h2>
      <p className="text-ink/80">We apply reasonable safeguards and retain data only as long as needed for the above purposes.</p>
      <h2 className="font-serif text-2xl mt-6">Access, correction, complaints</h2>
      <p className="text-ink/80">
        You can request access to or correction of your personal information. Contact us at
        <a href="mailto:hello@la45.app" className="gold-underline ml-1">hello@la45.app</a>. If you are not satisfied, you may contact the
        Office of the Australian Information Commissioner (OAIC). We follow the Notifiable Data
        Breaches (NDB) scheme for eligible data breaches.
      </p>
      <p className="text-ink/60 text-sm">Last updated: {new Date().toLocaleDateString("en-AU")}</p>
    </main>
  );
}
