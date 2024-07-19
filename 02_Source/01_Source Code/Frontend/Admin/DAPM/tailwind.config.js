/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        default: '0 1px 2px rgba(56, 65, 74, 0.15)'
      }
    },

  },
  plugins: [],
}