/** @type {import('tailwindcss').Config} */
const defaultTheme=require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['ClashDisplay-Regular',...defaultTheme.fontFamily.sans]
      },
      colors:{
        tomato:'#E50914',
        marigold:'#ffbe0b'
      },
    },
  },
  plugins: [],
}
//for font-family we have to import from assets but for colors we can simply declare rgb values here