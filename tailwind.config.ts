import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#0B1020",
          card: "#111827",
          cardHover: "#182234",
          border: "#1E293B",
          borderGlow: "rgba(59, 130, 246, 0.3)",
          blue: "#3B82F6",
          blueHover: "#2563EB",
          cyan: "#06B6D4",
          cyanHover: "#0891B2",
          text: "#F8FAFC",
          muted: "#94A3B8",
          darkMuted: "#64748B",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "'Helvetica Neue'",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "'Cascadia Code'",
          "'Fira Code'",
          "Consolas",
          "'Courier New'",
          "monospace",
        ],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(59, 130, 246, 0.3)",
        glowCyan: "0 0 25px -5px rgba(6, 182, 212, 0.3)",
        subtle: "0 4px 20px -2px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
