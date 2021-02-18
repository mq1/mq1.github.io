const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./layouts/**/*.html', './content/**/*.md', './content/**/*.html'],
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
};
