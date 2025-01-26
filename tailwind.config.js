/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'sm' : "640px",
      'md' : "830px",
      'lg' : "1024px",
      'xl' : "1280px"
    }
  },
  plugins: [],
}

