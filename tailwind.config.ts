import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors.js';

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
        caption: 'var(--text-caption)',
        'heading-sm': 'var(--text-heading-sm)',
        heading: 'var(--text-heading)',
        display: 'var(--text-display)',
      },
      spacing: {
        section: 'clamp(4rem, 3rem + 5vw, 10rem)',
        gutter: 'clamp(1rem, 4vw, 4rem)',
        'token-4': '4px',
        'token-8': '8px',
        'token-12': '12px',
        'token-16': '16px',
        'token-20': '20px',
        'token-24': '24px',
        'token-32': '32px',
        'token-80': '80px',
        'token-100': '100px',
        'token-148': '148px',
        'token-200': '200px',
        'token-240': '240px',
      },
      colors: {
        brand: {
          forest: '#0F2613',
          offwhite: '#F4F7F3',
          accent: '#009B40',
          canopy: '#35803B',
        },
        forest: {
          50: '#F2F9F4',
          100: '#E4F3E7',
          200: '#CCE7D0',
          300: '#A4D3A9',
          400: '#76B67C',
          500: '#4C9953',
          600: '#35803B', // Exact logo canopy green
          700: '#2B6835',
          750: '#23562C',
          800: '#1B4523',
          850: '#13341A',
          900: '#0F2613',
          950: '#09190D',
        },
        eco: {
          DEFAULT: '#009B40', // Exact logo primary leaf emerald
          50: '#EDFDF4',
          100: '#D8FEEF', // Exact logo glass mint highlight
          200: '#B2F5CE',
          300: '#74E59F',
          400: '#2ECE6F',
          500: '#009B40',
          600: '#008236',
          700: '#00672A',
          800: '#035022',
          900: '#04421D',
          neon: '#00B84D',
        },
        sand: {
          50: '#FAFCF9',
          100: '#F4F7F3',
          200: '#E9EFE7',
          300: '#DCE4DA',
        },
        /* Atlantic Design System Tokens */
        'ice-white': '#d8eaff',
        'void-black': '#000000',
        carbon: '#0d0d0f',
        graphite: '#232529',
        slate: {
          ...colors.slate,
          DEFAULT: '#2b2f33',
        },
        'color-slate': '#2b2f33',
        iron: '#41464c',
        steel: '#565e66',
        fog: '#6c757f',
        'iron-edge': '#565657',
        'electric-cobalt': '#1f58f2',
        'signal-orange': '#ff4105',
        surface: {
          void: '#000000',
          carbon: '#0d0d0f',
          graphite: '#232529',
          slate: '#2b2f33',
        },
      },
      maxWidth: {
        'page-max': '1400px',
      },
      fontFamily: {
        display: ['Outfit', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        monument: ['Monument', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '40px',
        '3xl-2': '40.798px',
        tags: '8px',
        cards: '16px',
        pills: '40.798px',
        buttons: '8px',
        largeCards: '24px',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(9, 25, 13, 0.08)',
        subtle: '0 4px 20px -2px rgba(9, 25, 13, 0.05)',
        lift: '0 20px 40px -15px rgba(9, 25, 13, 0.10)',
        glow: '0 0 36px -8px rgba(0, 155, 64, 0.38)',
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
