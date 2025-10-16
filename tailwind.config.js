/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'media-screen-75rem': '1200px',
        'media-screen-62rem': '992px',
      },
      colors: {
        'upper-green': '#6f9e3f',
        'footer-bg': '#5b8234',
        'primary-bg': '#e1d9c4',
        'nav-font': '#6a4e2e',
        'info-link-color-blue': '#3493fb',
        'button-hover': '#bba877cc',
        'menu-bar': '#f7f7f7',
      },
      maxWidth: {
        1170: '73.125rem',
        970: '60.625rem',
        750: '46.875rem',
      },
      spacing: {
        'header-height': '213px',
      },
    },
  },
  plugins: [],
};
