/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#62BFEC",
        secondary: "#4A7CD2",
        tertiary: "#EDF2FA",
        "primary-hover": "#8eceee",
        "light-blue": "#EDF2FA",
        "dark-gray": "#D9D9D9",
        "dark-purple": "#4122CE",
        "light-purple": "#9077FF80",
      },
      fontFamily: {
        alfa: ["Alfa Slab One", "serif"],
        istok: ["Istok Web", "sans-serif"],
        "istok-bold": ["Istok Web", "sans-serif"],
        "istok-italic": ["Istok Web", "sans-serif"],
        "istok-bold-italic": ["Istok Web", "sans-serif"],
        irish: ["Irish Grover", "system-ui"],
      },
    },
  },
  plugins: [],
};
