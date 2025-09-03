'use client';
import { useEffect, useRef } from 'react';

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

