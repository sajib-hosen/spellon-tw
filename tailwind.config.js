/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: "'Work Sans', sans-serif",
      },
      colors:{
        head:{
          400 : "#004750",
        },
        text:{
          400: "#646464",
        },
        border:{
          400: "#E3EEF0",
        },
        dsBdr:{
          400: "#008C96"
        }
      },
      width:{
        cont: "1302px",
      },
      height:{
        cont: "800px",
      },
      boxShadow:{
        my: "0px 4px 10px 15px rgba(198, 225, 230, 0.30)"
      },
    },
  },
  plugins: [],
}
