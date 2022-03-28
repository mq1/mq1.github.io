const purgecss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    purgecss({
      content: [
        "./public/**/*.html",
        "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
      ],
    }),
  ],
};
