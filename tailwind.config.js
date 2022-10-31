/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1140px'
    },
    extend: {
      colors: {
        'theme-default': '#FF3811',
        'theme-dark': '#151515',
        'theme-body': '#444444',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      spacing: {
        'b-130': '130px',
        'b-50': '50px',
        'b-30': '30px',
      },
      borderRadius: {
        'rounded-10': '10px',
      },
      lineHeight: {
        'leading-75': '75px',
        'leading-54': '54.46px',
        'leading-30': '30.26px',
        'leading-21': '21.78px',
      },
      fontSize: {
        'text-45': '45px',
        'text-30': '30px',
        'text-25': '25px',
      }
    },
  },
  plugins: [
    require("daisyui"),
  ],
}