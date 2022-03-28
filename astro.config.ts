import { defineConfig } from "astro/config";
import turbolinks from "@astrojs/turbolinks";

export default defineConfig({
  integrations: [turbolinks()],
  buildOptions: {
    site: "https://mq1.eu/",
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
