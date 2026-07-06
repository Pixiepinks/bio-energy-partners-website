/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6DBE45',
        dark: '#111827',
        charcoal: '#1F2937',
        lightGray: '#F7F7F7',
        white: '#FFFFFF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 60px rgba(17, 24, 39, 0.10)',
      },
    },
  },
  plugins: [],
};
