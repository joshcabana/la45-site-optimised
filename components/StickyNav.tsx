"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LiveAussieTime from "./LiveAussieTime";

/**
 * StickyNav renders a fixed header that becomes opaque on scroll and
 * collapses into a mobile menu on small screens. It uses a simple
 * hamburger toggle rather than relying on external icon libraries so the
 * component remains self contained. When the menu is open on mobile,
 * links are stacked vertically in an overlay beneath the nav bar.
 */
export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Watch for scroll to add a glass effect once the user has scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu when navigating (e.g. clicking a hash link)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      ref={ref}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "glass backdrop-saturate-150 border-b border-[rgba(200,164,93,0.25)]" : "bg-transparent"
      }`}
      aria-label="Primary navigation"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          onClick={handleLinkClick}
          className="font-serif text-xl tracking-tight hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
        >
          LA45
        </Link>
        <div className="flex items-center gap-2">
          {/* Show live time on desktop and larger screens */}
          <div className="hidden sm:block">
            <LiveAussieTime />
          </div>
          {/* Mobile menu toggle button. Hidden on ≥sm screens */}
          <button
            className="sm:hidden p-2 text-ink/80 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
          >
            {menuOpen ? (
              // X icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.72 4.72a.75.75 0 011.06 0L12 10.94l6.22-6.22a.75.75 0 111.06 1.06L13.06 12l6.22 6.22a.75.75 0 11-1.06 1.06L12 13.06l-6.22 6.22a.75.75 0 11-1.06-1.06L10.94 12 4.72 5.78a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
        {/* Navigation links */}
        <div
          id="primary-navigation"
          className={`${
            menuOpen ? "flex flex-col mobile-nav p-4 gap-4 sm:gap-3" : "hidden"
          } sm:flex sm:flex-row sm:static sm:p-0 sm:gap-3 items-center`}
          role="menu"
          aria-label="Primary navigation links"
        >
          <Link
            href="/#how"
            onClick={handleLinkClick}
            className="text-sm hover:underline decoration-gold-500 underline-offset-4"
          >
            How it works
          </Link>
          <Link
            href="/signup"
            onClick={handleLinkClick}
            className="text-sm hover:underline decoration-gold-500 underline-offset-4"
          >
            Tokens
          </Link>
          <Link
            href="/#safety"
            onClick={handleLinkClick}
            className="text-sm hover:underline decoration-gold-500 underline-offset-4"
          >
            Safety
          </Link>
          <Link
            href="/#faq"
            onClick={handleLinkClick}
            className="text-sm hover:underline decoration-gold-500 underline-offset-4"
          >
            FAQ
          </Link>
          <Link
            href="/onboarding"
            onClick={handleLinkClick}
            className="text-sm hover:underline decoration-gold-500 underline-offset-4"
          >
            Sign up
          </Link>
          <Link
            href="/signup"
            onClick={handleLinkClick}
            className="sm:ml-2 inline-flex items-center px-4 py-2 rounded-full bg-gold-500 text-ink text-sm font-medium hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
          >
            Enter the queue
          </Link>
        </div>
      </div>
    </nav>
  );
}
