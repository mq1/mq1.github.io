import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import turbolinks from "@astrojs/turbolinks";

export default defineConfig({
  integrations: [tailwind({}), turbolinks()],
  buildOptions: {
    site: "https://mq1.eu/",
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
