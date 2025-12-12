/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  darkMode: ['class', '.darkMode'],
  theme: {
    extend: {
      colors: {
        cream: 'var(--color-cream)',
        surface: 'var(--color-surface)',
        'surface-2': 'var(--color-surface-2)',
        ink: 'var(--color-ink)',
        muted: 'var(--color-muted)',
        primary: 'var(--color-primary)',
        sky: 'var(--color-sky)',
        lilac: 'var(--color-lilac)',
        purple: 'var(--color-purple)',
        indigo: 'var(--color-indigo)',
        pink: 'var(--color-pink)',
        'rose-dark': 'var(--color-rose-dark)',
        'rose-accent': 'var(--color-rose-accent)',
        'rose-light': 'var(--color-rose-light)',
        blush: 'var(--color-blush)',
      },
    },
  },
};
