/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      gideon: ["Gideon Roman, serif"],
      raleway: ["Raleway, sans-serif"],
    },
    extend: {},
  },
  plugins: [],
});
