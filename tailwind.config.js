/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        card: "#020617",
        border: "#1e293b",
        primary: "#6366f1",
        secondary: "#22d3ee",
        textPrimary: "#e5e7eb",
        textSecondary: "#94a3b8",
      },
    },
  },
  plugins: [],
};
