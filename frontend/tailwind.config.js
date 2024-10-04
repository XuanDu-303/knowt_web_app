// @type {import('tailwindcss').Config} 
import tailwindPreset from "./tailwind-preset"

export default {
  darkMode: ['class'],
  preset: [tailwindPreset],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      spacing: {},
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1124px',
      },
    },
  },
  plugins: [],
}

