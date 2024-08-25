/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#3f51b5',
          DEFAULT: '#fd3d57',
          dark: '#1c2e4a',
        },
      },
    },
  },
  plugins: [],
}
