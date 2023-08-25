/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      inter: ['var(--font-inter)', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/logo-red.jpg')",
      },
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      boxShadow: {
        button: '0px 0px 68px 7px rgb(255,99,71)',
      },
      colors: {
        'bg-red-site': '#4A0001',
      },
    },
  },
  plugins: [],
}
