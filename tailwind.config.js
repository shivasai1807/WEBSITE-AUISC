/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        'light-blue-purple': '#ECF2FF',
        'orange-yellow': '#FFC0B3',
        'medium-blue': '#6A8DFF',
        'dark-blue-purple': '#2C3E50',
        'bright-orange': '#FF8A65',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

