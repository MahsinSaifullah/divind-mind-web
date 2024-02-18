const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      customWhite: '#FFFEFC',
      darkPurple: '#8F70C6',
      lightPurple: '#D99BFF',
      brightPink: '#F597C1',
      darkPink: '#DC87AD',
    },
    extend: {
      fontFamily: {
        rubik: ['"Rubik"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
