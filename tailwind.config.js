/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'montserrat-regular': ['Montserrat-Regular', 'sans-serif'],
        'montserrat-medium': ['Montserrat-Medium', 'sans-serif'],
        'montserrat-extrabold': ['Montserrat-ExtraBold', 'sans-serif'],
      },
      fontWeight: {
        '400': '400',
        '500': '500',
        '700': '700',
        '900': '900',
      }
    },
  },
  plugins: [],
}