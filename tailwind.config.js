/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        back: "#EEEEEE",
        main: "#222831",
        highlight: "#00ADB5",
        soft: "#FFFCDC",
      },
    },
  },
  plugins: [],
};
