const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'midblack': '#1E1E1E',
        'yellow': '#F39B12',
        'navy': '#34495E',
        'white-back': '#ECF0F1',
        'blueee': '#3498DB',
        'gray2': '#D9D9D9',
        'cutered': '#E74B3C',

      },
      fontFamily: {
        sans: ['IBM Plex Sans Thai', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
