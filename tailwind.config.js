/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        default: '#fae6e5',
        primary: '#757674',
        primaryText: '#4365fe',
        secondary: '#210d0d',
        accent: '#52B799',
        background: '#1a0505'
      }
    },
  },
  plugins: [],
}

