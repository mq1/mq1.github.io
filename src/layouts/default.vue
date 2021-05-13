<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const setLocale = (code: string) => {
  locale.value = code
}
</script>

<template>
  <div class="flex flex-col justify-between gap-y-8 min-h-screen max-w-7xl mx-auto p-8 dark:bg-black dark:text-white">
    <header class="box">
      <h1 class="text-5xl">
        {{ t('hi') }}
        <br />
        {{ t('hi2') }}
      </h1>

      <div class="flex justify-between mt-4">
        <div class="flex gap-x-4">
          <a class="underline" :href="`https://mq1.github.io/mq1/${locale}.pdf`">
            {{ t('download-cv') }}
          </a>

          <router-link class="underline" to="/about-me">
            {{ t('about-me') }}
          </router-link>

          <router-link class="underline" to="/projects">
            {{ t('my-projects') }}
          </router-link>
        </div>
        <div class="flex gap-x-4">
          <button class="underline" @click="setLocale('en')">
            EN
          </button>
          <button class="underline" @click="setLocale('it')">
            IT
          </button>
        </div>
      </div>
    </header>

    <main class="flex flex-col gap-y-4">
      <router-view />
    </main>

    <footer class="mx-auto">
      MIT Licensed |
      © 2021 Manuel Quarneti |
      Hosted on Netlify |
      Source code <a class="underline" href="https://github.com/mq1/mq1.eu">here</a>
    </footer>
  </div>
</template>
