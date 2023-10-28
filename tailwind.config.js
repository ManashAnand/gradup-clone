/** @type {import('tailwindcss').Config} */
module.exports = {
  fontFamily: {
    helvetica: ['Helvetica Neue', 'sans'],
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        lexend: ['Lexend', 'sans'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
      },
    },
  },
  plugins: [],
}
