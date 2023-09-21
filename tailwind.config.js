/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primaryGradient:{
          100:"#7AE7C7",
          200:"#118AB2"
        },
        secondGradient:{
          100:"#FE5F55",
          200:"#EC0B43"
        },
        thirdGradient:{
          100:"#F0554C",
          200:"#F8D08D"
        },
        contactColor:{
          100:"#FFEEA3"
        }
      }
    },
  },
  plugins: [],
}
