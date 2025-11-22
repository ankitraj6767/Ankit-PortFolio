/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        'ink': '#0b1224',
        'card': '#0f172a',
        accent: {
          cyan: '#22d3ee',
          blue: '#60a5fa',
        },
      },
      boxShadow: {
        glow: '0 20px 80px rgba(34, 211, 238, 0.15)',
      },
      backgroundImage: {
        'grid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}
