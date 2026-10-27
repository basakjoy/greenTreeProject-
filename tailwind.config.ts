import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '120rem',
      '4xl': '160rem',
    },
    extend: {
      fontSize: {
        hero: 'clamp(2.5rem, 1.2rem + 5vw, 6.5rem)',
        h2: 'clamp(1.75rem, 1.2rem + 2vw, 3.5rem)',
        h3: 'clamp(1.25rem, 1rem + 1vw, 2rem)',
        body: 'clamp(1rem, 0.95rem + 0.25vw, 1.25rem)',
      },
      spacing: {
        section: 'clamp(4rem, 3rem + 5vw, 10rem)',
        gutter: 'clamp(1rem, 4vw, 4rem)',
      },
      colors: {
        brand: {
          forest: '#0E241B',
          offwhite: '#F7F9F6',
          accent: '#22C55E',
        },
        forest: {
          50: '#F2F8F5',
          100: '#E1EFE8',
          200: '#C4DFD2',
          300: '#9BC7B3',
          400: '#6FA990',
          500: '#4A8C70',
          600: '#347057',
          700: '#265743',
          800: '#1C4233',
          850: '#143427',
          900: '#0E241B',
          950: '#07150F',
        },
        eco: {
          DEFAULT: '#22C55E',
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
          neon: '#00E676',
        },
        sand: {
          50: '#FCFDFB',
          100: '#F7F9F6',
          200: '#EEF2EC',
          300: '#E1E7DF',
        },
      },
      fontFamily: {
        display: ['Outfit', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        subtle: '0 4px 20px -2px rgba(14, 36, 27, 0.06)',
        lift: '0 20px 40px -15px rgba(14, 36, 27, 0.12)',
        glow: '0 0 40px -10px rgba(34, 197, 94, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
