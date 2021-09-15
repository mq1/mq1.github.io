<script setup lang="ts">
const { locale } = useI18n()

const aboutMe = ref('')
const getAboutMe = () => fetch(`https://mq1.github.io/mq1/${locale.value}`).then(r => r.text()).then(t => aboutMe.value = t)

onMounted(getAboutMe)
watch(locale, getAboutMe)
</script>

<template>
  <div class="prose max-w-full" v-html="aboutMe"></div>
</template>
