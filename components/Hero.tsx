"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import useReducedMotion from "@/components/hooks/useReducedMotion";
import { gaEvent } from "@/utils/ga";

/**
 * Hero renders the top section of the landing page. An abstract background
 * image sets the mood while headings and calls to action introduce the
 * product. The alt text describes the image for screen readers.
 */
export default function Hero() {
  const reducedMotion = useReducedMotion();
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    requestAnimationFrame(() => videoRef.current?.play());
  };
  return (
    <section
      className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden px-4"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/photos/hero-poster.jpg"
          alt="LA45 hero"
          fill
          priority
          placeholder="empty"
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
        />
      </div>
      {!reducedMotion && playing && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          loop
          poster="/photos/hero-poster.jpg"
        >
          <source src="/photos/hero-banner.mp4" type="video/mp4" />
        </video>
      )}
      {!reducedMotion && !playing && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label="Play hero video"
          className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 text-white focus-visible:ring-2 focus-visible:ring-gold-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-16 h-16"
            aria-hidden
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
      <div className="absolute inset-0 hero-gold-vignette" aria-hidden />

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="text-center px-6 max-w-3xl">
          <h1 id="hero-title" className="font-serif text-[clamp(2rem,5vw,3.5rem)] leading-tight">
            45 seconds to spark something.
          </h1>
          <p className="mt-3 text-ink/80">
            Live video speed dates. Anonymous until you both match.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <Link
              href="/signup"
              onClick={() => gaEvent("signup_click")}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gold-500 text-ink font-medium hover:opacity-95 focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              Try a live demo
            </Link>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white" aria-hidden />
    </section>
  );
}
