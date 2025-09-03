export const metadata = { title: "Community Guidelines | LA45" };

/**
 * The community guidelines outline expected behaviour on the platform. A
 * respectful environment is fundamental to meaningful connections. By
 * participating in LA45 you agree to abide by these simple rules.
 */
import StructuredData from "@/components/StructuredData";

export default function GuidelinesPage() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-24 space-y-6">
      <StructuredData />
      <h1 className="font-serif text-3xl mb-4">Community Guidelines</h1>
      <p className="text-ink/80">
        LA45 is a place for kindness, curiosity and authentic connections. To
        protect our community, you must follow these rules:
      </p>
      <ul className="list-disc list-inside space-y-3 text-ink/80">
        <li>
          <strong>Be respectful:</strong> No harassment, hate, threats, discrimination or abusive
          language. Treat others as you’d like to be treated.
        </li>
        <li>
          <strong>Consent matters:</strong> Only share personal information when both people agree.
          Do not pressure anyone to reveal details or continue a call.
        </li>
        <li>
          <strong>No indecency:</strong> Nudity, sexual content and explicit behaviour are
          prohibited. Do not use LA45 while driving or in unsafe situations.
        </li>
        <li>
          <strong>No recording or screenshots:</strong> Respect privacy. Capturing audio, video or
          images of calls is strictly forbidden.
        </li>
        <li>
          <strong>Keep it safe:</strong> No doxxing, spam/scams, or illegal content/activity.
        </li>
        <li>
          <strong>Report issues:</strong> Use Block/Report during or after a call. We review
          reports quickly and enforce the rules.
        </li>
        <li>
          <strong>18+ only:</strong> You must be 18 or older. Age verification may be required.
        </li>
      </ul>
      <p className="text-ink/60 text-sm">
        Breaches may result in temporary suspension, permanent account bans,
        <strong> device‑level bans</strong>, and IP‑based access restrictions. For serious harms we may
        notify the eSafety Commissioner or law enforcement. These guidelines
        work alongside our <a href="/terms" className="gold-underline">Terms</a> and <a href="/privacy" className="gold-underline">Privacy</a>.
      </p>
    </main>
  );
}
