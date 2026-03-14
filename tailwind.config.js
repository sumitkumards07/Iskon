/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#A01D23", // Royal Crimson
        "background-light": "#FFFFFF", // Pure White
        "background-dark": "#1a2a4e", // Royal Navy
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Work Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
