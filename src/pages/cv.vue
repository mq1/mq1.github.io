<script setup lang="ts">
const { t, locale } = useI18n()

const aboutMe = ref('')
const getAboutMe = () => fetch(`https://mq1.github.io/mq1/${locale.value}`).then(r => r.text()).then(t => aboutMe.value = t)

onMounted(getAboutMe)
watch(locale, getAboutMe)
</script>

<template>
  <a :href="`https://mq1.github.io/mq1/${locale.value}.pdf`">
    <button>{{ t('download-pdf') }}</button>
  </a>
  <hr />
  <div v-html="aboutMe"></div>
</template>
