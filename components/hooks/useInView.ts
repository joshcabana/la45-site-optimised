import { useEffect, useRef, useState } from "react";

/**
 * useInView is a small wrapper around IntersectionObserver that turns
 * inView true once the element enters the viewport. It only ever
 * toggles to true, making it ideal for one‑time reveal animations.
 */
export function useInView<T extends HTMLElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options || { threshold: 0.2 });

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}