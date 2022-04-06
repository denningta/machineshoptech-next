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
          100: '#e9e9e9',
          200: '#bcbcbd',
          300: '#a5a6a7',
          400: '#8f9091',
          500: '#78797a',
          600: '#626364',
          700: '#4b4d4e',
          800: '#353638',
          900: '#1e2022',
        },
        primary: {
          100: '#79a8f2',
          200: '#639af0',
          300: '#4d8bed',
          400: '#367deb',
          500: '#206ee9',
          600: '#1d63d2',
          700: '#1a58ba',
          800: '#164da3',
          900: '#13428c',
        },
        accent: {
          100: '#fa80a0',
          200: '#f96b90',
          300: '#f95580',
          400: '#f84070',
          500: '#f72b60',
          600: '#de2756',
          700: '#c6224d',
          800: '#ad1e43',
          900: '#941a3a',
        },
      },
      margin: {
        'global-sm': '1em',
        'global-md': '2em',
        'global-lg': '3em',
      },
      padding: {
        'global-sm': '1em',
        'global-md': '2em',
        'global-lg': '3em',
      },
      maxWidth: {
        'primary-col': '1256px',
      },
    },
  },
  plugins: [],
};
