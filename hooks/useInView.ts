"use client";
import { useEffect, useRef, useState } from "react";
import { useThrottle } from "@/utils/throttle";

export default function useInView<T extends Element>(
  options: IntersectionObserverInit = { threshold: 0.2 }
) {
  const ref = useRef<T | null>(null);
  // Respect prefers-reduced-motion: reveal content by default to avoid animations
  const [reveal, setReveal] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  // Prepare a throttled fallback reader that uses ref.current at call time
  const throttledRead = useThrottle(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh * 0.8) setReveal(true);
  }, 120);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If reduced motion is preferred, reveal immediately
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (m.matches) {
      setReveal(true);
      return;
    }

    if (typeof IntersectionObserver !== "undefined") {
      const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setReveal(true);
          io.disconnect();
        }
      }, options);
      io.observe(el);
      return () => io.disconnect();
    }

    // Fallback: throttled scroll/resize listeners
    throttledRead();
    window.addEventListener("scroll", throttledRead, { passive: true });
    window.addEventListener("resize", throttledRead);
    return () => {
      window.removeEventListener("scroll", throttledRead);
      window.removeEventListener("resize", throttledRead);
    };
  }, [options, throttledRead]);

  return { ref, reveal } as const;
}
