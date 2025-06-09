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
        'light-blue-purple': '#E8F0FE',
        'orange-yellow': '#FFB74D',
        'medium-blue': '#1976D2',
        'dark-blue-purple': '#0D47A1',
        'bright-orange': '#FF5722',
        'accent-purple': '#7B1FA2',
        'light-accent': '#B39DDB',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

