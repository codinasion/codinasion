/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#EDFFE4",
        "primary-dark": "#081A00",
      },
    },
  },
  plugins: [],
};
