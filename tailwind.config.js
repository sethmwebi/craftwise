/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',
        secondary: '#4A1D1F',
        accent: '#FFA500',
        textPrimary: "#ccd6f6",
        textSecondary: "#8892b0",
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Default font
        montserrat: ['Montserrat', 'sans-serif'], // Custom entry
      },
      animation: {
        shine: 'shine 1.5s ease-out infinite',
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100px)' },
          '60%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};
