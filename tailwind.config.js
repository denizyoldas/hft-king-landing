/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3633D0',
        secondary: '#89C6FF',
        'title-yellow-300': '#F7FC0E',
        'title-yellow-500': '#FF8D8D'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Tiempos', ...defaultTheme.fontFamily.serif]
      },
      backgroundImage: {
        'button-gradient':
          'linear-gradient(97.86deg, #89C6FF -38.38%, #3633D0 71.88%);'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
}
