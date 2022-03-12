import Unocss from "unocss/vite";
import type { AstroUserConfig } from "astro";

const config: AstroUserConfig = {
  buildOptions: {
    site: "https://mq1.eu/",
  },
  vite: {
    plugins: [Unocss()],
  },
};

export default config;
