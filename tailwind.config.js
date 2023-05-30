module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: ['m-0', 'inline', 'ml-1'],
  theme: {},
  plugins: [require('@tailwindcss/typography')],
  variants: {
    margin: ['responsive', 'first'],
  },
};
