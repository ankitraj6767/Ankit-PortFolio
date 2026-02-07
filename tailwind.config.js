/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        orbitron: ['"Orbitron"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: 'rgb(var(--ink) / <alpha-value>)',
        card: 'rgb(var(--card) / <alpha-value>)',
        slate: {
          50: 'rgb(var(--slate-50) / <alpha-value>)',
          100: 'rgb(var(--slate-100) / <alpha-value>)',
          200: 'rgb(var(--slate-200) / <alpha-value>)',
          300: 'rgb(var(--slate-300) / <alpha-value>)',
          400: 'rgb(var(--slate-400) / <alpha-value>)',
          500: 'rgb(var(--slate-500) / <alpha-value>)',
          700: 'rgb(var(--slate-700) / <alpha-value>)',
          800: 'rgb(var(--slate-800) / <alpha-value>)',
          900: 'rgb(var(--slate-900) / <alpha-value>)',
          950: 'rgb(var(--slate-950) / <alpha-value>)',
        },
        cyan: {
          100: 'rgb(var(--cyan-100) / <alpha-value>)',
          200: 'rgb(var(--cyan-200) / <alpha-value>)',
          300: 'rgb(var(--cyan-300) / <alpha-value>)',
          400: 'rgb(var(--cyan-400) / <alpha-value>)',
          500: 'rgb(var(--cyan-500) / <alpha-value>)',
        },
        blue: {
          400: 'rgb(var(--blue-400) / <alpha-value>)',
          500: 'rgb(var(--blue-500) / <alpha-value>)',
        },
        accent: {
          cyan: '#38bdf8',
          blue: '#6366f1',
          purple: '#a855f7',
          violet: '#8b5cf6',
        },
      },
      boxShadow: {
        glow: '0 0 50px rgba(56, 189, 248, 0.15), 0 0 100px rgba(139, 92, 246, 0.1)',
        'glow-lg': '0 0 80px rgba(56, 189, 248, 0.2), 0 0 150px rgba(139, 92, 246, 0.15)',
        'glow-purple': '0 0 50px rgba(168, 85, 247, 0.15)',
        'card-hover': '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 40px rgba(56, 189, 248, 0.08)',
      },
      backgroundImage: {
        'grid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}
