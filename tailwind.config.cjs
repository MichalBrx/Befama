/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        xs: '2px'
      },
      screens: {
        'xl': {'max': '1400px'},
        // => @media (max-width: 1023px) { ... }
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
        'xs': {'max': '250px'},
        // => @media (max-width: 250px) { ... }
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
}
