const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./layouts/*.html"],
  theme:{
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      // fontFamily: {
      //   'overpass': ['Overpass', 'sans-serif'],
      //   'ubuntu': ['Ubuntu', 'sans-serif'],
      // },
      colors:{
        'light-red':'#e81922',
'light-black':'#111111',
'very-light-black':'#292929',
'very-light-gray':'#e5e5e5',
'light-gray':'#b3b3b3',
'medium-gray':'#b7babf',
'dark-gray':'#333333',
'stroke':'#fde6e7',

      },
      
      backgroundImage: {
        'hero-pattern-desktop': "linear-gradient(0deg, rgba(42,41,51,0.35), rgba(42,41,51,0.35)), url('../image1.avif');",      
        'attribution': "linear-gradient(0deg, rgba(219,39,119,0.80), rgba(219,39,119,0.85)),url('../images/attribute.jpg');",      
      }
      
           
    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('@tailwindcss/forms')
  ],
}
