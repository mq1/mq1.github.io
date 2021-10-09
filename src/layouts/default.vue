<script setup lang="ts">
import { author } from '~/../package.json'
</script>

<template>
  <Header />

  <main>
    <router-view />
  </main>

  <footer>
    © {{ new Date().getFullYear() }} {{ author }}
  </footer>
</template>
