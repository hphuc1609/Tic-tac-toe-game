/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0ea5e9',
        secondary: '#eab308',
        third: '#A8BFC9',
        primaryDark: '#1e293b'
      }
    }
  },
  plugins: []
}
