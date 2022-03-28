const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    purgecss({
      content: [
        "./public/**/*.html",
        "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
      ],
    }),
    cssnano(),
  ],
};
