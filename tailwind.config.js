/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        kumbh: ['Kumbh Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}