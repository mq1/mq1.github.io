module.exports = {
  plugins: {
    tailwindcss: {},
    "postcss-100vh-fix": {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
