/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Brand tokens live in globals.css as CSS variables; Tailwind just points at them.
      colors: {
        red: 'var(--red)',
        'red-on-dark': 'var(--red-on-dark)',
        navy: 'var(--c-navy)',
        'on-dark-2': 'var(--c-on-dark-2)',
      },
      fontFamily: {
        body: ['var(--font-body)'],
        heading: ['var(--font-heading)'],
      },
    },
  },
  plugins: [],
};

export default config;
