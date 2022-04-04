import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind({})],
  site: "https://mq1.eu/",
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
