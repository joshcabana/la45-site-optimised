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
      className="relative min-h-[70vh] md:min-h-[82vh] flex items-center overflow-hidden px-4"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src="/photos/hero-poster.jpg"
          alt=""
          aria-hidden
          fill
          priority
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzAnIGhlaWdodD0nMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHJhZGlhbEdyYWRpZW50IGlkPSdnJyBjeD0nNTAlJyBjeT0nNTAlJyByPSc1MCUnPjxzdG9wIHN0b3AtY29sb3I9JyMwMDAwMDAnIG9mZnNldD0nMCUnIC8+PHN0b3Agc3RvcC1jb2xvcj0nIzEwMTAxMCcgb2Zmc2V0PScxMDAlJyAvPjwvcmFkaWFsR3JhZGllbnQ+PHJlY3Qgd2lkdGg9JzEwMCUnIGhlaWdodD0nMTAwJScgZmlsbD0ndXJsKCNjKScgLz48L3N2Zz4="
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
          className="absolute inset-0 z-20 flex items-center justify-center bg-ink/40 text-paper focus-visible:ring-2 focus-visible:ring-gold"
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
            45-second live speed-dates
          </h1>
          <p className="mt-3 text-ink/80">
            Live video speed dates. Anonymous until you both match.
          </p>
          <div className="mt-8 flex items-center justify-center gap-6">
            <Link
              href="/signup"
              onClick={() => gaEvent("signup_click")}
              className="inline-flex items-center justify-center px-5 py-3 min-h-[44px] rounded-lg bg-gold text-ink font-medium hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Get started
            </Link>
            <Link
              href="/#how-it-works"
              className="inline-flex items-center justify-center px-2 py-1 min-h-[44px] font-medium underline-offset-4 hover:underline"
            >
              How it works
            </Link>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-paper/70 via-paper/40 to-paper" aria-hidden />
    </section>
  );
}
