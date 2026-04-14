/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:    'var(--navy)',
        emerald: 'var(--emerald)',
        gold:    'var(--emerald)',   // alias so existing className="text-[var(--gold)]" still resolves
        bg:      'var(--bg)',
        surface: 'var(--surface)',
        text:    'var(--text)',
        muted:   'var(--muted)',
        border:  'var(--border)',
      },
      fontFamily: {
        serif: ['Montserrat', 'Inter', 'sans-serif'],
        sans:  ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        card:  'var(--shadow-card)',
        hover: 'var(--shadow-hover)',
        lg:    'var(--shadow-lg)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
    },
  },
  plugins: [],
}
