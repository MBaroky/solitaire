/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark: "var(--dark-bg)",
        darkAlpha: "--alpha(var(--dark-bg) / 50%)", // --alpha(var(--color-lime-300) / 50%);
        gold: "var(--gold-bg)",
      },
      fontFamily: {
        gerbil: ["var(--font-gerbil)"],
      },
      maxWidth: {
        container: "1200px",
      },
      fontSize: {
        "heading-1": "4vw",
        "heading-2": "3vw",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};
