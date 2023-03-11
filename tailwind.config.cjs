/** @type {import('tailwindcss').Config} */
const { radixToTailwind } = require("./src/radixToTailwind.cjs");
const { slate, slateDark, sky, skyDark } = require("@radix-ui/colors");
module.exports = {
  content: ['src/**/*.tsx','index.html'],
  theme: {
    extend: {
      colors: {
        neutral: radixToTailwind(slate),
        neutralDark: radixToTailwind(slateDark),
        primary: radixToTailwind(sky),
        primaryDark: radixToTailwind(skyDark)
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
