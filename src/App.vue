<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Manuel Quarneti',
  meta: [
    { name: 'description', content: 'Manuel Quarneti\'s personal website' },
  ],
})
</script>

<template>
  <router-view />
</template>
