<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const aboutMe = ref('')
const getAboutMe = () => fetch(`https://mq1.github.io/mq1/${locale.value}`).then(r => r.text()).then(t => aboutMe.value = t)

onMounted(getAboutMe)
watch(locale, getAboutMe)
</script>

<template>
  <div class="prose dark:prose-light max-w-full box" v-html="aboutMe"></div>
</template>
