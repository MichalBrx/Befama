/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    animation: {
      fadeIn: "fadeIn 0.75s ease-in forwards",
      spin: "spin 1s linear infinite"
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 }
      }
    },
    variants: {
      animation: ["motion-safe"]
    },
    fontFamily: {
      'impact': ["Impact"]
    },
    extend: {
      blur: {
        xs: '2px'
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
