'use client';
import { useEffect, useRef, useState } from 'react';

export function useIO<T extends Element>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T | null>(null);
  const [isIntersecting, set] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => set(e.isIntersecting), options);
    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return { ref, isIntersecting };
}
