import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0,0,0,0.35)',
      },
      backgroundImage: {
        grain: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 0, transparent 25%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.04) 0, transparent 20%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
