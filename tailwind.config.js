/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      lineClamp: {
        2: '2',
      },
    },
  },
  plugins: [],
};

