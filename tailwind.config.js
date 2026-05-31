/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#E8A020',
          dark: '#C47A15',
          light: '#F5C55A',
          pale: '#FDF3E0'
        },
        navy: {
          DEFAULT: '#0D1B2A',
          mid: '#152236',
          light: '#1E3050'
        },
        steel: {
          DEFAULT: '#7A8FA6',
          light: '#B8C8D8'
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#128C7E'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Barlow Condensed', 'sans-serif']
      },
      boxShadow: {
        gold: '0 8px 32px rgba(232, 160, 32, .30)',
        deep: '0 18px 50px rgba(13, 27, 42, .20)'
      }
    }
  },
  plugins: []
};
