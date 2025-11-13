/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "ardia-blue": "#1f6feb",
        "ardia-dark": "#020817",
        "ardia-accent": "#00c2a8"
      }
    }
  },
  plugins: []
};
