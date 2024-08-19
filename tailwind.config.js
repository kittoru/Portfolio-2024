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
        // '2xl': {'max': '1440px'},
        // 'xl': {'max': '1280px'},
        // 'm1100': {'max': '1100px'},
        // 'lg': {'max': '1024px'},
        // 'md': {'max': '768px'},
        // 'sm': {'max': '640px'},
      '2xl': {'max': '1440px'},
      'max-md': {'max': '1280px'},
      'max-sm': {'max': '1100px'},
      'm1000': {'max': '1000px'},
      'm905': {'max': '905px'},
      'm805': {'max': '805px'},
      'm650': {'max': '650px'},
      'm565': {'max': '565px'},
      'md': {'max': '768px'},
      'sm': {'max': '640px'},
      'm405': {'max': '405px'},
      'mini': {'max': '375px'},
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

