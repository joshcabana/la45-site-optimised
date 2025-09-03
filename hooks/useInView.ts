"use client";
import { useEffect, useRef, useState } from "react";

export function useThrottle<T extends (...args: any[]) => void>(fn: T, ms = 120) {
  const last = useRef(0);
  const saved = useRef(fn);
  useEffect(() => {
    saved.current = fn;
  }, [fn]);
  return ((...args: any[]) => {
    const now = Date.now();
    if (now - last.current >= ms) {
      last.current = now;
      saved.current(...args);
    }
  }) as T;
}

export default function useInView<T extends Element>(
  options: IntersectionObserverInit = { threshold: 0.2 }
) {
  const ref = useRef<T | null>(null);
  // Respect prefers-reduced-motion: reveal content by default to avoid animations
  const [reveal, setReveal] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If reduced motion is preferred, reveal immediately
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (m.matches) {
      setReveal(true);
      return;
    }

    let io: IntersectionObserver | null = null;
    try {
      io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setReveal(true);
          io && io.disconnect();
        }
      }, options);
      io.observe(el);
    } catch {
      // Fallback: use throttled scroll listener
      const onScroll = useThrottle(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < vh * 0.8) setReveal(true);
      }, 120);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }

    return () => io && io.disconnect();
  }, [options.root, options.rootMargin, options.threshold]);

  return { ref, reveal } as const;
}

