"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const enabled = stored === "dark" || (!stored && prefersDark);
      document.documentElement.classList.toggle("dark", enabled);
      setIsDark(enabled);
    } catch {
      // ignore
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // ignore
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="p-2 text-ink/80 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
    >
      {isDark ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V3A.75.75 0 0112 2.25zm0 15a3 3 0 110-6 3 3 0 010 6zM5.47 4.47a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06L5.47 5.53a.75.75 0 010-1.06zm12 0a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 11-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm4.28 7.53a.75.75 0 010 1.5h-1.5a.75.75 0 010-1.5h1.5zm-16.5 0a.75.75 0 010 1.5H3a.75.75 0 010-1.5h1.25zm12.72 6.72a.75.75 0 010 1.06.75.75 0 01-1.06 0l-1.06-1.06a.75.75 0 111.06-1.06l1.06 1.06zm-9.44 0l1.06-1.06a.75.75 0 00-1.06-1.06L5.47 18.47a.75.75 0 001.06 1.06zM12 18a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0112 18z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M21.752 15.002A9.718 9.718 0 0112 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.432 2.873-8.204 6.84-9.447a.75.75 0 01.92.92 7.969 7.969 0 009.437 9.437.75.75 0 01.92.92 9.72 9.72 0 01-3.575 3.172z" />
        </svg>
      )}
    </button>
  );
}

