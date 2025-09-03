"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LiveAussieTime from "./LiveAussieTime";
import { gaEvent } from "@/utils/ga";

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
    const onScroll = () => {
      requestAnimationFrame(() => setScrolled(window.scrollY > 16));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ensure the mobile menu closes if the viewport is resized to desktop
  // dimensions. Without this, opening the menu on mobile and then rotating
  // or resizing the device could leave the overlay visible on larger
  // screens.
  useEffect(() => {
    const onResize = () => {
      requestAnimationFrame(() => {
        if (window.innerWidth >= 640) setMenuOpen(false);
      });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close the mobile menu when navigating (e.g. clicking a hash link)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      ref={ref}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur-md bg-paper/80 dark:bg-ink/70 border-b border-ink/10 dark:border-paper/10"
          : "bg-transparent"
      }`}
      aria-label="Primary"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          onClick={handleLinkClick}
          className="font-serif text-xl tracking-tight hover:opacity-90 min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
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
            type="button"
            className="sm:hidden p-2 min-h-[44px] text-ink/80 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-menu"
          >
            {menuOpen ? (
              // X icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden
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
                aria-hidden
              >
                <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
        {/* Navigation links */}
        <div
          id="primary-menu"
          className={`${
            menuOpen ? "flex flex-col mobile-nav fade-in p-4 gap-4 md:gap-3" : "hidden"
          } md:flex md:flex-row md:static md:p-0 md:gap-3 items-center`}
        >
          <Link
            href="/how-it-works"
            onClick={handleLinkClick}
            className="text-sm py-2 min-h-[44px] hover:underline decoration-gold underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            How it works
          </Link>
          <Link
            href="/safety"
            onClick={handleLinkClick}
            className="text-sm py-2 min-h-[44px] hover:underline decoration-gold underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Safety
          </Link>
          <Link
            href="/faq"
            onClick={handleLinkClick}
            className="text-sm py-2 min-h-[44px] hover:underline decoration-gold underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            FAQ
          </Link>
          <Link
            href="/onboarding"
            onClick={() => {
              gaEvent("signup_click");
              handleLinkClick();
            }}
            className="text-sm py-2 min-h-[44px] hover:underline decoration-gold underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Sign up
          </Link>
          <Link
            href="/signup"
            onClick={() => {
              gaEvent("enter_queue_click");
              handleLinkClick();
            }}
            className="md:ml-2 inline-flex items-center px-4 py-2 min-h-[44px] rounded-full bg-gold text-ink text-sm font-medium hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Enter the queue
          </Link>
        </div>
      </div>
    </nav>
  );
}
