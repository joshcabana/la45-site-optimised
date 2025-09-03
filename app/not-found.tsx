import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-svh place-items-center px-6 py-24">
      <div className="text-center">
        <Image
          src="/icon.svg"
          alt="LA45 logo"
          width={64}
          height={64}
          className="mx-auto mb-6"
        />
        <h1 className="font-serif text-5xl">404</h1>
        <p className="mt-4 text-lg text-ink/70">This page doesn’t exist.</p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full border border-gold/30 px-6 py-3 min-h-[44px] hover:border-gold/50 hover:bg-ink/40 focus-visible:ring-2 focus-visible:ring-gold"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
