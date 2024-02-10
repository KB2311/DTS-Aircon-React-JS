/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#003c96',
        secondary: '#3bed8e',
      },
      screens: {
        xsm: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
      },
      spacing: {
        container: `max(1rem, calc((100vw - calc(1460px - 1rem * 2)) / 2))`,
        'sm-container': `max(1rem, calc((100vw - calc(1024px - 1rem * 2)) / 2))`,
      },
    },
  },
  plugins: [],
};
