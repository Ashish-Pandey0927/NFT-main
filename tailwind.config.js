/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bubble-once': 'bubble 0.5s ease-in-out',
      },
      keyframes: {
        bubble: {
          '0%, 100%': { transform: 'scaleX(1) scaleY(1)' },
          '50%': { transform: 'scaleX(0.90) scaleY(1.10)' },
        },
      },
    },
  },
  plugins: [],
};
