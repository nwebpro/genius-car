/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-default': '#FF3811',
        'theme-dark': '#151515'
      }
    },
  },
  plugins: [
    require("daisyui"),
  ],
}