/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#32D6D1',
          secondary: '#3E8EFF',
          accent: '#7B5CFF',
          'accent-2': '#D87AFB',
        },
        surface: {
          bg: '#09090B',
          DEFAULT: '#111217',
          card: '#181A22',
          border: '#2A2E39',
        },
        text: {
          DEFAULT: '#FFFFFF',
          secondary: '#B9C1D9',
          muted: '#A8B0C4',
          disabled: '#60697D',
        },
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
      },
      backgroundImage: {
        'brand-gradient':
          'linear-gradient(135deg, #32D6D1 0%, #3E8EFF 35%, #7B5CFF 70%, #D87AFB 100%)',
      },
      boxShadow: {
        glow: '0 0 15px rgba(50,214,209,.35), 0 0 35px rgba(123,92,255,.25)',
        'glow-sm': '0 0 8px rgba(50,214,209,.25)',
      },
    },
  },
  plugins: [],
}
