import {defineConfig} from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
    site: 'https://mq1.eu',
    integrations: [tailwind(), mdx(), compress()]
});
