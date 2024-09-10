/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        background: "#16181D",
        blue: "#649EE3",
        gray: "#292C34",
        gray100: "#0D0E11",
        gray200: "#16181D",
        gray300: "#292C34",
        yellow: '#EABD5F',

        
      },
      fontFamily: {
        asap: ['Asap', 'sans-serif'],
        inconsolata: ['Inconsolata', 'monospace'],
        maven: ['Maven Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

