/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        default: '#fae6e5',
        primary: '#3fdbe4',
        primaryText: '#4365fe',
        secondary: '#3a0603',
        accent: '#e41c11',
        background: '#1a0505'
      }
    },
  },
  plugins: [],
}

