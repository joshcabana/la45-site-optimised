export const metadata = { title: "Privacy Policy | LA45" };

/**
 * A simple privacy policy outlining how LA45 handles user data. This page
 * isn’t a substitute for formal legal counsel but provides clear,
 * human‑readable principles: minimal data collection, no recording and
 * respect for participant privacy. Feel free to expand or refine these
 * clauses based on regulatory requirements.
 */
export default function PrivacyPage() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl px-6 py-24 space-y-6">
      <h1 className="font-serif text-3xl mb-4">Privacy Policy</h1>
      <p className="text-ink/80">
        LA45 was built to foster genuine connections while respecting your privacy. We minimise the
        data we collect and never record your conversations.
      </p>
      <ul className="list-disc list-inside space-y-3 text-ink/80">
        <li>
          <strong>Ephemeral calls:</strong> Live video chats are never recorded or stored. Once your
          call ends, it’s gone.
        </li>
        <li>
          <strong>Minimal metadata:</strong> We keep only the information necessary to match you with
          others (such as your handle and match preferences) and basic metadata for
          moderation (timestamps and room identifiers).
        </li>
        <li>
          <strong>No selling data:</strong> We do not sell or share your personal data with third
          parties. Data is used solely to operate LA45 and to improve the service.
        </li>
        <li>
          <strong>Local storage:</strong> Certain preferences (like snoozing donation prompts) are
          stored in your browser’s local storage and never transmitted to our servers.
        </li>
        <li>
          <strong>Complying with AU regulations:</strong> Our handling of personal data is aligned
          with Australian privacy principles. If you have questions, please contact us at
          <a href="mailto:hello@la45.app" className="gold-underline ml-1">hello@la45.app</a>.
        </li>
      </ul>
      <p className="text-ink/60 text-sm">
        This policy may evolve as we grow or if regulatory requirements change. We will
        update this page to reflect any material updates.
      </p>
    </main>
  );
}
