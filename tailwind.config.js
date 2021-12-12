const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        "gray-primary": "#24292e"
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        retro: ["retro"]
      },
      boxShadow:{
        "retro-gray": "0.5px 0.5px #f1f4d8, 1px 1px #f1f4d8, 2px 2px #f1f4d8, 2.5px 2.5px #242423, 3px 3px #242423, 3.5px 3.5px #242423, 4px 4px #242423, 4.5px 4.5px #242423, 5px 5px #242423, 5.5px 5.5px #242423, 6px 6px #242423, 6.5px 6.5px #242423, 7px 7px #242423, 7.5px 7.5px #242423;",
        "retro-green": "0.5px 0.5px #f1f4d8, 1px 1px #f1f4d8, 2px 2px #f1f4d8, 2.5px 2.5px #16a34a, 3px 3px #16a34a, 3.5px 3.5px #16a34a, 4px 4px #16a34a, 4.5px 4.5px #16a34a, 5px 5px #16a34a, 5.5px 5.5px #16a34a, 6px 6px #16a34a, 6.5px 6.5px #16a34a, 7px 7px #16a34a, 7.5px 7.5px #16a34a;"
      },
      textShadow:{
        "retro-gray" : "0.5px 0.5px #f1f4d8, 1px 1px #f1f4d8, 2px 2px #f1f4d8, 2.5px 2.5px #242423, 3px 3px #242423, 3.5px 3.5px #242423, 4px 4px #242423, 4.5px 4.5px #242423, 5px 5px #242423, 5.5px 5.5px #242423, 6px 6px #242423, 6.5px 6.5px #242423, 7px 7px #242423, 7.5px 7.5px #242423;",
        "retro-gray-sm" : "0.5px 0.5px #f1f4d8, 1px 1px #f1f4d8, 2px 2px #f1f4d8, 2.5px 2.5px #242423, 3px 3px #242423, 3.5px 3.5px #242423, 4px 4px #242423, 4.5px 4.5px #242423, 5px 5px #242423, 5.5px 5.5px #242423, 6px 6px #242423, 6.5px 6.5px #242423;",
        "retro-green": "0.5px 0.5px #f1f4d8, 1px 1px #f1f4d8, 2px 2px #f1f4d8, 2.5px 2.5px #16A34A, 3px 3px #16A34A, 3.5px 3.5px #16A34A, 4px 4px #16A34A, 4.5px 4.5px #16A34A, 5px 5px #16A34A, 5.5px 5.5px #16A34A, 6px 6px #16A34A, 6.5px 6.5px #16A34A, 7px 7px #16A34A, 7.5px 7.5px #16A34A;",
        "retro-green-sm": "0.5px 0.5px #f1f4d8, 1px 1px #f1f4d8, 2px 2px #f1f4d8, 2.5px 2.5px #16A34A, 3px 3px #16A34A, 3.5px 3.5px #16A34A, 4px 4px #16A34A, 4.5px 4.5px #16A34A, 5px 5px #16A34A, 5.5px 5.5px #16A34A, 6px 6px #16A34A, 6.5px 6.5px #16A34A;"
        
      }
    },
  },
  variants: {
    extend: {
      scrollbar: ['rounded']
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
