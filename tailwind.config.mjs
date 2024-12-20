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
        gold: "var(--gold-bg)",
      },
      fontFamily: {
        gerbil: ["var(--font-gerbil)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
