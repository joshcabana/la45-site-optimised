/**
 * Tailwind Config — LA45
 */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.25rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
      screens: { "2xl": "1440px" },
    },
    extend: {
      colors: {
        ink: "#0a0a0a",
        paper: "#ffffff",
        gold: {
          DEFAULT: "#D4AF37",
          50: "#FFF9E6",
          100: "#FEF0C7",
          200: "#F8DC8A",
          300: "#F0C95B",
          400: "#E7B83A",
          500: "#D4AF37",
          600: "#B6972F",
          700: "#957B27",
          800: "#6F5C1E",
          900: "#4B3E15",
          950: "#2E260D",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        xs: ["0.82rem", { lineHeight: "1.4" }],
        sm: ["0.9rem", { lineHeight: "1.5" }],
        base: ["clamp(0.98rem, 0.36vw + 0.86rem, 1.05rem)", { lineHeight: "1.65" }],
        lg: ["clamp(1.05rem, 0.45vw + 0.92rem, 1.2rem)", { lineHeight: "1.6" }],
        xl: ["clamp(1.2rem, 0.7vw + 1rem, 1.4rem)", { lineHeight: "1.5" }],
        "2xl": ["clamp(1.35rem, 1vw + 1.05rem, 1.75rem)", { lineHeight: "1.35" }],
        "3xl": ["clamp(1.6rem, 1.4vw + 1.1rem, 2.1rem)", { lineHeight: "1.25" }],
        "4xl": ["clamp(2rem, 2vw + 1.2rem, 2.6rem)", { lineHeight: "1.15" }],
        "5xl": ["clamp(2.5rem, 2.6vw + 1.6rem, 3.2rem)", { lineHeight: "1.1" }],
        "6xl": ["clamp(3rem, 3.4vw + 2rem, 4rem)", { lineHeight: "1.05" }],
      },
      borderRadius: {
        xl: "1rem",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(0,0,0,0.06), 0 2px 8px rgba(0,0,0,0.06)",
      },
    },
  },
  plugins: [],
};
