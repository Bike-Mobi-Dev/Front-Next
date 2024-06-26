/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:s
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul': '#3AA0FF',
        'white': '#fff',
        'tomEscuro': '#170F49',
        'cinza': '#979797',
        'cinzaClaro': '#EFF0F6',
        'strava': '#f87d2b',
      },
      fontFamily: {
        'dmsans': ['DM Sans', 'sans-serif'],
        'robot': ['Roboto', 'sans-serif']
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#3AA0FF",
          "secondary": "#170F49",
          "accent": "#979797",
          "neutral": "#1E1E1E",
          "base-100": "#fff",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

