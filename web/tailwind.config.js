/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mukta', 'sans-serif']
      },
      colors: {
        gradient: {
          100: 'linear-gradient(225deg, #EA1D22 0%, #92070A 100%);',
          200: 'linear-gradient(180deg, #B21317 0%, #8E1514 100%);',
          300: 'linear-gradient(225deg, #272A31 0%, #0B0D11 100%);',
        },
        gray: {
          100: '#F8FBFF',
          200: '#F0F3F7',
          300: '#E3E8EF',
          400: '#C4C6C8',
          500: '#ABADB0',
          600: '#929498',
          700: '#787A7E',
          800: '#5D6063',
          900: '#444649',
          1000: '#272A31',
          1100: '#14181F',
          1200:'#0A0C10',
        },
        red: {
          400: '#FA3C41',
          500: '#E42B2F',
          600:'#AB0E12'
        }


      }
    },
  },
  plugins: [],
}
