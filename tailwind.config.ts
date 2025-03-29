/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
            'shiny-text': 'shiny-text 8s infinite',
          },
          keyframes: {
            'shiny-text': {
              '0%, 90%, 100%': {
                'background-position': 'calc(-100% - var(--shimmer-width)) 0',
              },
              '30%, 60%': {
                'background-position': 'calc(100% + var(--shimmer-width)) 0',
              },
            },
          },
      },
    },
    plugins: [],
  }