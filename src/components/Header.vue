<script setup lang="ts">
import { isDark, toggleDark } from '~/logic'

const { t, locale } = useI18n()
</script>

<template>
  <header class="border p-4 rounded-xl flex flex-wrap gap-y-4 justify-between items-center">
    <div class="flex gap-x-4 items-center">
      <router-link to="/" class="text-5xl font-bold">
        mq1
      </router-link>
      <div class="flex gap-2 mt-2">
        <a href="https://github.com/mq1/">
          <feather-github class="w-6 h-6" />
        </a>
        <a href="https://linkedin.com/in/mq1/">
          <feather-linkedin class="w-6 h-6" />
        </a>
        <a href="mailto:manuelquarneti@gmail.com">
          <feather-mail class="w-6 h-6" />
        </a>
        <a href="https://t.me/quarno">
          <feather-send class="w-6 h-6" />
        </a>
      </div>
    </div>

    <div class="flex items-center divide-x divide-black">
      <div class="flex gap-x-2 px-2">
        <a class="btn" :href="`https://mq1.github.io/mq1/${locale}.pdf`">
          {{ t('download-cv') }}
        </a>

        <router-link to="/about-me">
          {{ t('about-me') }}
        </router-link>

        <router-link to="/projects">
          {{ t('my-projects') }}
        </router-link>
      </div>

      <div class="flex gap-x-2 px-2">
        <a class="cursor-pointer" :class="locale === 'en' && 'router-link-active'" @click="locale = 'en'">
          EN
        </a>
        <a class="cursor-pointer" :class="locale === 'it' && 'router-link-active'" @click="locale = 'it'">
          IT
        </a>
      </div>

      <button class="flex items-center pl-3" @click="toggleDark">
        <feather-moon v-if="isDark" />
        <feather-sun v-else />
      </button>
    </div>
  </header>
</template>
