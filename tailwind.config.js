/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],  
  theme: {
    extend: {
      colors: {
        'neworange': '#ff6900',
        'navorange': '#FFC8C8'       
      },
      fontFamily: {
        body: ['Roboto']
      }
    },
  },
  plugins: [],
}
