<script setup lang="ts">
import { author } from '~/../package.json'

const { locale, availableLocales } = useI18n()
</script>

<template>
  <Header />

  <select v-model="locale">
    <option v-for="l in availableLocales" :key="l">
      {{ l }}
    </option>
  </select>

  <main>
    <router-view />
  </main>

  <hr />

  <footer>
    © {{ new Date().getFullYear() }} {{ author }}
  </footer>
</template>
