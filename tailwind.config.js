/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'home': "url('../src/assets/img/_DSF8208.jpg')",
      }
    },
    fontFamily: {
      'kanit': ['Kanit'],
    }
  },
  plugins: [],
}

