import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";


export default defineConfig({
  integrations: [tailwind(), image()]
});
