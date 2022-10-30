/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      grid: {
        gridAutoColumns: {
          autofill: true,
          repeat: true,
          '1fr': 'minmax(280px, 1fr)'
        }
      }
    },
  },
  plugins: [],
}
