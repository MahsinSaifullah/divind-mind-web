const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      customWhite: '#FFFEFC',
      lightGrey: '#F3F3F1',
      darkPurple: '#8F70C6',
      lightPurple: '#D99BFF',
      softPurple: '#CCB3F8',
      brightPink: '#F597C1',
      darkPink: '#DC87AD',
      bluishWhite: '#F1F3FF',
    },
    extend: {
      fontFamily: {
        rubik: ['"Rubik"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
