/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'card-header':['Nunito Sans', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'aboutImage' : "url('../public/assets/about.jpg')"
      }
    },
    colors: {
      _blue:"#06bbcc",
      _light_blue:"#f0fbfc",
      light_grey: "#52565b"
    }
  },
  plugins: [],
}

