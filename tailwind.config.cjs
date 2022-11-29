/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    fontFamily: {
      'impact': ["Impact"]
    },
    extend: {
      blur: {
        xs: '2px'
      },
      backgroundImage: {
        'wave': "url('./wave.svg')"
      },
      screens: {
        'sm': '506px',
        // => @media (min-width: 506px) { ... }
  
        'md': '790px',
        // => @media (min-width: 860px) { ... }
  
        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    base: false,

  }
}
