/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
        sacramento: ['Sacramento', 'script'],
        'six-caps': ['Six Caps', 'sans-serif'],
      },

      colors: {
        customPrimary: '#161618',
        customSecondary: '#9A9A9A',
        background: '#F3F3F3',
      },
    },
  },
  plugins: [],
}