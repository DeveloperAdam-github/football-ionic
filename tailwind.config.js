module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#0F1012',
      navbar: '#101011',
      secondary: '#141517',
      third: '#FF2E0C',
      fourth: '#212226',
    }),
    extend: {
      fontFamily: {
        headline: ['F1-Regular'],
        boldHeadline: ['F1-Bold'],
      },
      height: {
        '8vh': '8vh',
        '10vh': '10vh',
        '82vh': '82vh',
        '90vh': '90vh',
      },
      fontSize: {
        md: '0.8rem',
        xxs: '0.60rem',
      },
      backgroundColor: {
        pink: '#FE2782',
      },
      colors: {
        pink: '#FE2782',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
