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
        backdrop: 'rgba(0, 0, 0, 0.5)',
        'secondary-dark': '#ffff',
        'primary-dark': '#000000',
        'secondary-white': '#000000',
        'primary-white': '#ffff',
      },
      padding: {
        '21rem': '21rem',
      },
    },
  },
  plugins: [],
}
