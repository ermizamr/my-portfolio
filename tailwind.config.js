/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ← Add this line
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
