/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#f569ff',
          50: '#fdf2ff',
          100: '#fae5ff',
          200: '#f6cbff',
          300: '#f1a1ff',
          400: '#e866ff',
          500: '#f569ff',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        purple: {
          950: '#0f051d',
          900: '#1e0b3a',
          850: '#2b1053',
        },
        silver: {
          100: '#f8fafc',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
        },
        dark: {
          950: '#020208',
          900: '#050510',
          850: '#090818',
          800: '#0f0e24',
          750: '#151433',
        }
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'spin-reverse-slow': 'spin-reverse 45s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      backgroundImage: {
        'silver-gradient': 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 50%, #94a3b8 100%)',
        'silver-purple': 'linear-gradient(135deg, #ffffff 0%, #d8b4fe 40%, #c084fc 70%, #9333ea 100%)',
        'neon-purple-gradient': 'linear-gradient(135deg, #f569ff 0%, #c084fc 50%, #9333ea 100%)',
        'dark-metallic': 'radial-gradient(ellipse at 50% -20%, #1a0f35 0%, #06050e 60%, #020208 100%)',
      }
    },
  },
  plugins: [],
}

