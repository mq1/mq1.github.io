<script setup lang="ts">
const { t, locale, availableLocales } = useI18n()
</script>

<template>
  <header>
    <h1>
      <router-link to="/">
        mq1
      </router-link>
    </h1>
    <a href="https://github.com/mq1">
      <carbon-logo-github />
    </a>
    <a href="https://linkedin.com/in/mq1/">
      <carbon-logo-linkedin />
    </a>
    <a href="mailto:manuelquarneti@gmail.com">
      <carbon-email />
    </a>
    <nav>
      <router-link to="/cv">
        {{ t('my-cv') }}
      </router-link> /
      <router-link to="/projects">
        {{ t('my-projects') }}
      </router-link>
    </nav>
    <select v-model="locale">
      <option v-for="l in availableLocales" :key="l">
        {{ l }}
      </option>
    </select>
  </header>
</template>
