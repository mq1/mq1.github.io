<script setup lang="ts">
import { ref, onMounted } from 'vue'

const aboutMe = ref('')
const getAboutMe = () => fetch('/aboutMe').then(r => r.text()).then(t => aboutMe.value = t)

onMounted(getAboutMe)
</script>

<template>
  <div class="prose dark:prose-light p-8 max-w-full mx-auto border-2 border-dashed rounded-3xl" v-html="aboutMe" />
</template>
