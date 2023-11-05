/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkBlue: "hsl(223, 47%, 23%)",
        desaturatedBlue: "hsl(224, 23%, 55%)",
        veryPaleBlue: "hsl(225, 100%, 98%)",
        brightBlue: "hsl(245, 75%, 52%)",
      },
      fontFamily: {
        custom: ["Red Hat Display", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
