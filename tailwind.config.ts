import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  safelist: [
    // Ensure focus ring utilities are retained in production builds
    "focus-visible:ring-2",
    "focus-visible:ring-gold",
    "focus-visible:ring-offset-2",
    "focus-visible:outline-none",
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        paper: "var(--color-paper)",
        gold: "var(--color-gold-500)",
      },
      fontFamily: {
        // Mapped to next/font variables defined in app/fonts.ts
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-playfair)", "ui-serif", "Georgia"],
      },
    },
  },
  plugins: [],
};

export default config;
