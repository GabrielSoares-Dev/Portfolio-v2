/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#08d665',
        secondary: '#000000',
        backdrop: 'rgba(0, 0, 0, 0.5)',
      },
      padding: {
        '21rem': '21rem',
      },
    },
  },
  plugins: [],
}
