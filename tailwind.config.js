
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        anime: {
          red: '#FF4757',
          blue: '#3742FA',
          yellow: '#FFA502',
          black: '#000000',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
        display: ['"Noto Sans JP"', 'sans-serif'],
      },
      boxShadow: {
        'pop': '6px 6px 0px 0px #000000',
        'pop-hover': '10px 10px 0px 0px #000000',
        'pop-red': '6px 6px 0px 0px #FF4757',
        'pop-blue': '6px 6px 0px 0px #3742FA',
        'pop-yellow': '6px 6px 0px 0px #FFA502',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '6': '6px',
      },
      animation: {
        'bounce-slight': 'bounce-slight 2s infinite',
      },
      keyframes: {
        'bounce-slight': {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
