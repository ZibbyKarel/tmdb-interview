import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Avenir Next', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        hero: '0 24px 60px rgba(0, 0, 0, 0.35)',
      },
    },
  },
} satisfies Config;
