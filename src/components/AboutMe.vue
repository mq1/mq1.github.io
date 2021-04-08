<script setup lang="ts">
import { ref, onMounted } from 'vue'

const aboutMe = ref('')
const getAboutMe = () => fetch('/aboutMe').then(r => r.text()).then(t => aboutMe.value = t)

onMounted(getAboutMe)
</script>

<template>
  <div class="prose dark:prose-light my-10" v-html="aboutMe" />
</template>
