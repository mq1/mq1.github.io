import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@unocss/nuxt',
  ],
  unocss: {
    uno: true,
    attributify: true,
    preflight: true,
    icons: {
      scale: 2,
    },
  },
})
