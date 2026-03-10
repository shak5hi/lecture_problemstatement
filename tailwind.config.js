/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#050507',
          card: '#0c0f14',
          border: '#1f2937',
        },
        aurora: {
          teal: '#2dd4bf',
          blue: '#3b82f6',
          indigo: '#6366f1',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(45, 212, 191, 0.2), inset 0 0 10px rgba(45, 212, 191, 0.1)' },
          '100%': { boxShadow: '0 0 25px rgba(45, 212, 191, 0.6), inset 0 0 20px rgba(45, 212, 191, 0.3)' },
        }
      }
    },
  },
  plugins: [],
}
