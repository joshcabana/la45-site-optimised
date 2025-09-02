export const metadata = { title: "Terms of Service | LA45" };

/**
 * The terms of service outline the contractual relationship between you and
 * LA45. They explain eligibility, the role of tokens and limitations of
 * liability. These highlights provide clarity but are not exhaustive.
 */
export default function TermsPage() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl px-6 py-24 space-y-6">
      <h1 className="font-serif text-3xl mb-4">Terms of Service</h1>
      <p className="text-ink/80">
        By accessing or using LA45 you agree to these terms. Please read them
        carefully.
      </p>
      <ul className="list-disc list-inside space-y-3 text-ink/80">
        <li>
          <strong>Eligibility:</strong> You must be at least 18 years old and able to form a
          legally binding contract to use LA45. You are responsible for
          compliance with your local laws.
        </li>
        <li>
          <strong>Tokens:</strong> Tokens provide access to calls and optional extensions. They
          are a licence to use the service and have no monetary value outside
          LA45. Tokens are non‑refundable and may expire at our discretion.
        </li>
        <li>
          <strong>Beta disclaimer:</strong> LA45 is currently in beta. Features may change,
          fail or be removed without notice. We do not guarantee that you will
          find a match or that the service will meet your expectations.
        </li>
        <li>
          <strong>User conduct:</strong> You are responsible for your interactions. Follow our
          Community Guidelines. We are not liable for the behaviour of other
          users, but we will enforce the rules and respond to reports.
        </li>
        <li>
          <strong>Limitations of liability:</strong> To the maximum extent permitted by law, LA45
          and its operators are not liable for indirect, incidental or
          consequential damages arising from your use of the service.
        </li>
      </ul>
      <p className="text-ink/60 text-sm">
        These highlights summarise the key points. The full legal terms
        apply and may be updated periodically. Continued use of the service
        constitutes acceptance of any revised terms.
      </p>
    </main>
  );
}
