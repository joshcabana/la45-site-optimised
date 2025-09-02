export const metadata = { title: "Community Guidelines | LA45" };

/**
 * The community guidelines outline expected behaviour on the platform. A
 * respectful environment is fundamental to meaningful connections. By
 * participating in LA45 you agree to abide by these simple rules.
 */
export default function GuidelinesPage() {
  return (
    <main id="main-content" className="mx-auto max-w-3xl px-6 py-24 space-y-6">
      <h1 className="font-serif text-3xl mb-4">Community Guidelines</h1>
      <p className="text-ink/80">
        LA45 is a place for kindness, curiosity and authentic connections. To
        protect our community we ask every participant to follow these
        principles:
      </p>
      <ul className="list-disc list-inside space-y-3 text-ink/80">
        <li>
          <strong>Be respectful:</strong> Treat others as you’d like to be treated. No hate
          speech, harassment, discrimination or abusive language.
        </li>
        <li>
          <strong>Consent matters:</strong> Only reveal personal information when both parties
          agree. Do not pressure others to share details or to continue a call.
        </li>
        <li>
          <strong>No indecency:</strong> Keep conversations and appearances appropriate. Nudity,
          sexual content and explicit behaviour are prohibited.
        </li>
        <li>
          <strong>No recording or screenshots:</strong> Respect the privacy of your match. Capturing
          audio, video or images of calls is strictly forbidden.
        </li>
        <li>
          <strong>Report issues:</strong> Use the built‑in Block/Report tools if someone behaves
          inappropriately. Our moderators review reports quickly and take
          appropriate action.
        </li>
        <li>
          <strong>Age requirement:</strong> LA45 is for adults 18+ only. Do not use the service if
          you are underage.
        </li>
      </ul>
      <p className="text-ink/60 text-sm">
        Failure to follow these guidelines may result in temporary or permanent
        suspension. We reserve the right to remove any content or user who
        jeopardises the safety of the community.
      </p>
    </main>
  );
}
