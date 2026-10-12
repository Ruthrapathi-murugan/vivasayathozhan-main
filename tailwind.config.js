/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    colors: {
      primary: '#1E4E27',
      'primary-light': '#9CC5A173',
      earth: '#8B4513',
      soil: '#6B4423',
      harvest: '#DAA520',
    },
    fontFamily: {
      sans: ['Poppins', 'system-ui', 'sans-serif'], // Primary font for the app
      serif: ['Kintagina', 'serif'], // For special headings
      tamil: ['Alankaram Plain', 'sans-serif'], // For Tamil text
      heading: ['Poppins', 'system-ui', 'sans-serif'], // Modern headings
      display: ['Kintagina', 'serif'], // For special display text
    },
    animation: {
      'scroll': 'scroll 40s linear infinite',
    },
    keyframes: {
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },
  },
};
export const plugins = [];
