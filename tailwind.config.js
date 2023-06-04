/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'audiowide': ['Audiowide', 'cursive'],  // Audiowide is generally considered a cursive font
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}