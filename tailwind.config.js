/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0C",
        card: "#141416",
        border: "rgba(255, 255, 255, 0.08)",
        lime: {
          DEFAULT: "#CBF432",
          400: "#CBF432",
          500: "#B8E020",
        },
        textPrimary: "#FFFFFF",
        textSecondary: "#A1A1AA",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
