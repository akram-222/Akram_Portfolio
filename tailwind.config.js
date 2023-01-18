/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      visibility: ["group-hover"],
      colors: {
        card: "#171717",
        white: "#ffffff",
      },
      screens: {
        xs: "450px",
      },
      keyframes: {
        move: {
          "0%": { transform: "translatey(55px)", opacity: 1 },
          "100%": { transform: "translatey(-108px)", opacity: 0 },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        "fade-in-top": {
          "0%": {
            transform: "translateY(-50px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        "fade-out-bottom": {
          "0%": {
            transform: "translateY(0px)",
            opacity: 1,
          },
          "100%": {
            transform: "translateY(50px)",
            opacity: 0,
          },
        },
        flicker: {
          "0%": {
            opacity: 0,
          },
          "10%": {
            opacity: 0,
          },
          "10.1%": {
            opacity: 1,
          },
          "10.2%": {
            opacity: 0,
          },
          "20%": {
            opacity: 0,
          },
          "20.1%": {
            opacity: 1,
          },
          "20.6%": {
            opacity: 0,
          },
          "30%": {
            opacity: 0,
          },
          "30.1%": {
            opacity: 1,
          },
          "30.5%": {
            opacity: 1,
          },
          "30.6%": {
            opacity: 0,
          },
          "45%": {
            opacity: 0,
          },
          "45.1%": {
            opacity: 1,
          },
          "50%": {
            opacity: 1,
          },
          "55%": {
            opacity: 1,
          },
          "55.1%": {
            opacity: 0,
          },
          "57%": {
            opacity: 0,
          },
          "57.1%": {
            opacity: 1,
          },
          "60%": {
            opacity: 1,
          },
          "60.1%": {
            opacity: 0,
          },
          "65%": {
            opacity: 0,
          },
          "65.1%": {
            opacity: 1,
          },
          "75%": {
            opacity: 1,
          },
          "75.1%": {
            opacity: 0,
          },
          "77%": {
            opacity: 0,
          },
          "77.1%": {
            opacity: 1,
          },
          "85%": {
            opacity: 1,
          },
          "85.1%": {
            opacity: 0,
          },
          "86%": {
            opacity: 0,
          },
          "86.1%": {
            opacity: 1,
          },
          "100%": {
            opacity: 1,
          },
        },
        scaleUpCenter: {
          "0%": {
            transform: "scale(0.5)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        rubberband: {
          "0%": {
            transform: "scaleX(1)",
          },
          "40%": {
            transform: "scaleX(1.12) scaleY(0.75)",
          },
          "55%": {
            transform: "scaleX(0.85) scaleY(1)",
          },
          "65%": {
            transform: "scaleX(1.09) scaleY(0.85)",
          },
          "75%": {
            transform: "scaleX(0.9)  scaleY(1)",
          },
          "90%": {
            transform: "scaleX(1.05) scaleY(0.95)",
          },
          "100%": {
            transform: "scaleX(1) scaleY(1)",
          },
        },
        "scale-out-hor-left": {
          "0%": {
            transform: "scaleX(1)",
            "transform-origin": "0 0",
            opacity: 1,
          },
          "100%": {
            transform: "scaleX(0)",
            "transform-origin": "0 0",
            opacity: 1,
          },
        },
        "scale-in-hor-left": {
          "0%": {
            transform: "scaleX(0)",
            "transform-origin": "0 0",
            opacity: 1,
          },
          "100%": {
            transform: "scaleX(1)",
            "transform-origin": "0 0",
            opacity: 1,
          },
        },
      },
      animation: {
        "ping-once": "ping .2s linear 1",
        "move-vertical": "move 5s linear infinite alternate both",
        flicker: "flicker 2s linear both",
        scaleUpCenter:
          "scaleUpCenter 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both",
        "fade-in": "fade-in .5s linear 0s 1 normal none",
        "fade-in-top": "fade-in-top .5s ease-in-out 0s 1 normal none",
        "fade-out-bottom": "fade-out-bottom .5s ease-in-out 0s 1 normal none",
        rubberband: "rubberband 800ms alternate ease-out",
        "scale-out-hor-left": "scale-out-hor-left 1s ease 0s 1 normal none",
        "scale-in-hor-left": "scale-in-hor-left .4s linear 0s 1 normal none",
      },
    },
    screens: {
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
