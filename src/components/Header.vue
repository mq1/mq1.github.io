<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { isDark, toggleDark } from '~/logic'

const { t, locale } = useI18n()
</script>

<template>
  <header class="box">
    <h1 class="text-5xl font-bold">
      {{ t('hi') }}
      <br />
      {{ t('hi2') }}
    </h1>

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

    <div class="flex flex-wrap justify-between gap-y-4 mt-4">
      <div class="flex flex-wrap gap-4">
        <a class="btn" :href="`https://mq1.github.io/mq1/${locale}.pdf`">
          {{ t('download-cv') }}
        </a>

        <div class="tabs">
          <router-link to="/about-me">
            {{ t('about-me') }}
          </router-link>

          <router-link to="/projects">
            {{ t('my-projects') }}
          </router-link>
        </div>
      </div>

      <div class="flex gap-x-4 items-center">
        <div class="tabs">
          <button :class="locale === 'en' && 'tab-active'" @click="locale = 'en'">
            EN
          </button>
          <button :class="locale === 'it' && 'tab-active'" @click="locale = 'it'">
            IT
          </button>
        </div>

        <button class="btn py-2" @click="toggleDark">
          <feather-moon v-if="isDark" />
          <feather-sun v-else />
        </button>
      </div>
    </div>
  </header>
</template>
