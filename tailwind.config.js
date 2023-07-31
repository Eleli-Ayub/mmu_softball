/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000",
      lightred: "#ef4444",
      deepblue: "#082f49",
      pink: "#e11d48",
      green: "#22c55e",
      blue: "#0891b2",
      white: "#cbd5e1",
      lightblack: "#475569",
    },
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
