import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f8ff',
          100: '#ddf0ff',
          500: '#1E9FFF',
          600: '#1E9FFF',
          700: '#4CB2FF',
          900: '#0a6abf',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#374151',
            a: {
              color: '#1E9FFF',
              '&:hover': {
                color: '#4CB2FF',
              },
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
