/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#D377FF",
          DEFAULT: "#9A5BFF",
          dark: "#6438B2",
        },
        secondary: {
          light: "#5A91FF",
          DEFAULT: "#3B77FF",
          dark: "#2B57B2",
        },
        purple: {
          DEFAULT: "#af47d2",
        },
        blue: {
          light: "#354a83",
          DEFAULT: "#26355d",
        },
        gray: {
          light: "#f5f5f5",
          DEFAULT: "#eeeeee",
          dark: "#616161",
        },
      },
    },
  },
  plugins: [],
};
