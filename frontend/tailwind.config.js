/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'lightgreen': "#2CA28C",
        'lightred': "#E36941",
        'lightyellow': "#F7B141",
        "lightgray" : "#545454"
      }

    },
    fontFamily: {
      'grotesk' : ['Bricolage Grotesque', 'sans-serif'],
      'poppins' : ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}