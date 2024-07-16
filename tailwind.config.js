/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (_) =>({
        'custom-background':"url('./src/assets/pexels-moose-photos-1037992.jpg')"
      })
    },
  },
  plugins: [],
}

