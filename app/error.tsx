"use client";
import Image from "next/image";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main id="main" className="grid min-h-svh place-items-center px-6 py-24">
      <div className="text-center">
        <Image src="/icon.svg" alt="LA45 logo" width={64} height={64} className="mx-auto mb-6" />
        <h1 className="font-serif text-4xl">Something went wrong</h1>
        <p className="mt-3 text-ink/70">An unexpected error occurred. Please try again.</p>
        {error?.digest && (
          <p className="mt-2 text-xs text-ink/50">Error ID: {error.digest}</p>
        )}
        <button
          onClick={reset}
          className="mt-6 inline-block rounded-full border border-gold/30 px-6 py-3 min-h-[44px] hover:border-gold/50 hover:bg-ink/40 focus-visible:ring-2 focus-visible:ring-gold"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
