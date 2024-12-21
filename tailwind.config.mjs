/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: "#1B1B1B",
        customOrange: "#FF9505",
        customBorderColor: "#FFFBFB",
        customBgImageTile: "#2C2B2B",
        customGrayColor: "#F2F2F2",
      },
      fontFamily: {
        inter: "var(--font-inter)",
        monte: "var(--font-monte)",
        ptserif: "var(--font-pt-serif)",
      },
    },
  },
  plugins: [],
};
