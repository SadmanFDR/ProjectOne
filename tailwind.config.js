/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      bannerColor :'#257251',
      paragrapColor :'#6F747B',
      normalText : '#181820',
    },
    fontFamily:{
      'Montserrat' : ["Cormorant Garamond", 'serif'],
      'Lora' : ["Cormorant Garamond", 'serif'],
      'Inter':["Cormorant Garamond", 'serif']
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  plugins: [],
}