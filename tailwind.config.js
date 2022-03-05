module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {},
  plugins: [require('@tailwindcss/typography')],
  variants: {
    margin: ['responsive', 'first'],
  },
};
