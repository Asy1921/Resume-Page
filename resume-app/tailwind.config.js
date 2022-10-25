/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#ff4800",
        transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      }
    },
    fontFamily: {
      'sans': 'ui-sans-serif',
      'serif': 'ui-serif', 
      'mono': 'ui-monospace', 
      'display': 'Oswald',
      'body': '"Open Sans"',
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
