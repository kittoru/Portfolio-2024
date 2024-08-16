/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './index.html',
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      blue: {
        'base': '#8498B6',
        'light': '#9AB6DE',
        'light-gray': '#A1ACBD',
        'light-xs': '#A6C3EB',
        'light-sm': '#ADCFFF',
      },
      gray: {
        'bg-pill': '#EDEDED',
        'pill': '#666666',
      }
    },
    extend: {
      screens: {
      '2xl': {'max': '1440px'},
      },
      container: {
        center: true,
        padding: '20px'
      },
      fontFamily: {
        sans: [
          'Inter',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}

