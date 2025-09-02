"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Hero renders the top section of the landing page. An abstract background
 * image sets the mood while headings and calls to action introduce the
 * product. The alt text describes the image for screen readers.
 */
export default function Hero() {
  const [videoError, setVideoError] = useState(false);
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);

  // Only play background video when it’s likely beneficial:
  // - user does NOT prefer reduced motion
  // - connection is not save-data and is reasonably fast
  // - viewport is at least small/desktop width
  useEffect(() => {
    if (typeof window === "undefined") return;
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const conn: any = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    const evaluate = () => {
      const prefersReduced = !!m?.matches;
      const saveData = !!conn?.saveData;
      const effectiveType = conn?.effectiveType as string | undefined;
      const fast = effectiveType ? ["4g", "5g"].includes(effectiveType) : true;
      const wide = window.innerWidth >= 640; // ≥ sm
      setShouldPlayVideo(!prefersReduced && !saveData && fast && wide);
    };
    evaluate();
    m?.addEventListener?.("change", evaluate);
    conn?.addEventListener?.("change", evaluate);
    window.addEventListener("resize", evaluate, { passive: true });
    return () => {
      m?.removeEventListener?.("change", evaluate);
      conn?.removeEventListener?.("change", evaluate);
      window.removeEventListener("resize", evaluate);
    };
  }, []);
  return (
    <section
      className="relative min-h-[90svh] flex items-center justify-center overflow-hidden px-4"
      role="region"
      aria-labelledby="hero-title"
    >
      {/* Background video (gated by user/device conditions) */}
      {shouldPlayVideo && !videoError ? (
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          poster="/photos/hero-poster.jpg"
          onError={() => setVideoError(true)}
          aria-hidden
        >
          <source src="/photos/hero-banner.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0 w-full h-full object-cover bg-gradient-to-b from-white/70 via-white/40 to-white" aria-hidden />
      )}
      {/* subtle gold vignette for a luxe feel */}
      <div className="absolute inset-0 hero-gold-vignette" aria-hidden />

      <div className="relative z-10 text-center px-6 max-w-3xl fade-in-up">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-gold-500/15 text-gold-500 text-xs border border-gold-500/30">
          Beta now open
        </span>
        <p className="mt-3 text-sm tracking-wide uppercase text-ink/70">
          Video‑first speed dating
        </p>
        <h1
          id="hero-title"
          className="mt-3 font-serif text-4xl sm:text-6xl leading-tight"
        >
          Meet in 45 seconds. <span className="text-gold-500">No swipe</span>,
          just vibe.
        </h1>
        <p className="mt-3 text-ink/80">
          Real‑time video intros. Anonymous until it’s mutual.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/signup"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-gold-500 text-ink font-medium hover:opacity-95 focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            Enter the queue
          </Link>
          <a
            href="#how"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full border border-ink/20 hover:border-ink/40 focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            How it works
          </a>
        </div>
      </div>
      {/* Scroll cue */}
      <a
        href="#how"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-ink/60 hover:text-ink focus-visible:ring-2 focus-visible:ring-gold-500 rounded-full px-3 py-1"
        aria-label="Scroll to how it works"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 16a1 1 0 0 1-.7-.29l-5-5a1 1 0 1 1 1.4-1.42L12 13.59l4.3-4.3a1 1 0 0 1 1.4 1.42l-5 5A1 1 0 0 1 12 16z"/>
        </svg>
      </a>
      {/* Light gradient overlay for readability over imagery on white theme */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white" />
    </section>
  );
}
