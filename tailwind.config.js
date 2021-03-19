const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './_includes/**/*.njk'
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
