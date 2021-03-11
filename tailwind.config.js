const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './_site/*.html'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
