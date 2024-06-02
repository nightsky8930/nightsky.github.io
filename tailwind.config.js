/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customPink: '#F2E9EB',
        customGray: '#F6F4E8',
        customSeaGreen: '#BACEC1',
        customOrangeLight: '#FFD5AF',
        customOrangeDark: '#FFD5AF',
        customBlue: '#B3DEE5',
        customGreenBlue: '#31525B',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        materialIcons: ['Material Icons'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
