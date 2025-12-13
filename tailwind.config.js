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
        'ink': '#0a0a0f',
        'card': '#12121a',
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
