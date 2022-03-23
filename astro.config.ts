import { defineConfig } from "astro/config";

export default defineConfig({
  buildOptions: {
    site: "https://mq1.eu/",
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
