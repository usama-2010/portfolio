import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F4F1EA",
          elevated: "#FAF7F0",
          dark: "#0A0A0A",
          "elevated-dark": "#111111",
        },
        ink: {
          DEFAULT: "#111111",
          muted: "#5C5C5C",
          dark: "#EDEDED",
          "dark-muted": "#888888",
        },
        accent: {
          DEFAULT: "#C44E2A",
          hover: "#A33D20",
          muted: "#E07A5F",
        },
        line: {
          DEFAULT: "#D4CFC4",
          dark: "#222222",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.65" }],
        base: ["1rem", { lineHeight: "1.75" }],
        lg: ["1.125rem", { lineHeight: "1.65" }],
        xl: ["1.25rem", { lineHeight: "1.5" }],
      },
      spacing: {
        section: "clamp(5rem, 12vw, 9rem)",
      },
      maxWidth: {
        site: "76rem",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
