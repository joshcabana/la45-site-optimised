import Link from "next/link";

export const metadata = { title: "Thanks | LA45" };

/**
 * A simple thank you page shown after a successful donation or
 * match. Expresses gratitude and links back to the home page. The
 * design remains centred and minimal like the rest of the site.
 */
export default function ThanksPage() {
  return (
    <main id="main" className="mx-auto max-w-xl px-6 py-24 space-y-6 text-center">
      <h1 className="font-serif text-3xl">Thank you ♥</h1>
      <p className="text-ink/80">
        Your support helps keep LA45 free while we grow. Wishing you many
        more good conversations.
      </p>
      <Link
        href="/"
        className="rounded-full bg-gold-500 text-ink px-6 py-3 inline-block hover:bg-gold-600 focus-visible:ring-2 focus-visible:ring-gold-500"
      >
        Back to Home
      </Link>
    </main>
  );
}
