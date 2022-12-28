/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        card: "#171717",
        white: "#ffffff",
      },
      screens: {
        xs: "450px",
      },
      keyframes: {
        move: {
          "25%": { transform: "translatey(15%)", opacity: 1 },
          "50%": { transform: "translatey(-10%)" },
          "75%": { transform: "translatey(-35%)" },
        },
      },
      animation: {
        "ping-once": "ping .2s linear 1",
        "move-vertical": "move 4s infinite both",
      },
    },
    screens: {
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
