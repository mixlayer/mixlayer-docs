/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./theme.config.tsx",
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Berkeley Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
