/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      display: ["Roboto", "sans-serif"], 
    },
    extend: {colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "slate-300":"#cbd5e1",
      "black": "#000000",
      "white": "#FFFFFF",
      'dark-slate': '#3a353f',
      'grey': '#505668',
      'cream': '#f1ece1',
      'orange': '#c05850'
    },
    transitionProperty: {
      'height': 'height',
    }  
  },
  },
  plugins: [],
}

