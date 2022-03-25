/* eslint-disable no-undef */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          100: '#9423D1',
          200: '#7C1EAE',
          300: '#63188C',
          400: '#4A1269',
          500: '#3E0F57',
          600: '#310C45',
          700: '#250934',
          800: '#190623',
          900: '#0C0311',
        },
        primary: {
          100: '#F2BABA',
          200: '#EC9898',
          300: '#E67575',
          400: '#DF5353',
          500: '#D62828',
          600: '#AB2121',
          700: '#891A1A',
          800: '#671414',
          900: '#440D0D',
        },
        secondary: {},
      },
    },
  },
  plugins: [],
};
