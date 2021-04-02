<script setup lang="ts">
import { ref, onMounted } from 'vue'

const aboutMe = ref('')
const getAboutMe = () => fetch('/aboutMe').then(r => r.text()).then(t => aboutMe.value = t)

onMounted(getAboutMe)
</script>

<template>
  <div class="max-w-5xl prose dark:prose-light p-10 sm:shadow-xl sm:rounded-2xl sm:border-2" v-html="aboutMe" />
</template>
