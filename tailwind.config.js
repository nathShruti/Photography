/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('../src/assets/img/_DSF8208.jpg')",
      }
    },
    fontFamily: {
      'montserrat': ['Montserrat'],
    }
  },
  plugins: [],
}

