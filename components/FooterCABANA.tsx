import Link from "next/link";

export default function FooterCABANA() {
  return (
    <footer className="mt-24 bg-ink border-t border-white/10 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 grid sm:grid-cols-3 gap-8">
        <div>
          <h4 className="font-serif text-lg text-white">LA45</h4>
          <p className="text-sm text-white/70 mt-2">Australia‑first beta. 18+ only.</p>
        </div>
        <nav className="grid gap-2 text-sm text-white/80" aria-label="Footer">
          <Link
            href="/guidelines"
            className="hover:underline decoration-gold-500 underline-offset-4 hover:text-white"
          >
            Community Guidelines
          </Link>
          <Link
            href="/privacy"
            className="hover:underline decoration-gold-500 underline-offset-4 hover:text-white"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="hover:underline decoration-gold-500 underline-offset-4 hover:text-white"
          >
            Terms
          </Link>
          <Link
            href="/#safety"
            className="hover:underline decoration-gold-500 underline-offset-4 hover:text-white"
          >
            Safety
          </Link>
          <a
            href="mailto:hello@la45.app"
            className="hover:underline decoration-gold-500 underline-offset-4 hover:text-white"
          >
            Contact
          </a>
        </nav>
        <div className="text-sm text-white/70">
          <p>AUD • dd/mm/yyyy • AEST</p>
          <p className="mt-2">© {new Date().getFullYear()} LA45</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-10 text-center">
        <span className="font-serif text-2xl tracking-tight text-white">LA45</span>
      </div>
    </footer>
  );
}
