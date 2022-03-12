import type { AstroUserConfig } from "astro";

const config: AstroUserConfig = {
  buildOptions: {
    site: "https://mq1.eu/",
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
};

export default config;
