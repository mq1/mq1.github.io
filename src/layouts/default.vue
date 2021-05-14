<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
</script>

<template>
  <div class="dark:bg-black dark:text-white">
    <div class="flex flex-col justify-between gap-y-8 min-h-screen max-w-7xl mx-auto p-4 sm:p-8">
      <header class="box">
        <h1 class="text-5xl font-bold">
          {{ t('hi') }}
          <br />
          {{ t('hi2') }}
        </h1>

        <div class="flex gap-2 mt-2">
          <a href="https://github.com/mq1/">
            <carbon-logo-github class="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/mq1/">
            <carbon-logo-linkedin class="w-6 h-6" />
          </a>
          <a href="mailto:manuelquarneti@gmail.com">
            <carbon-email class="w-6 h-6" />
          </a>
          <a href="https://t.me/quarno">
            <carbon-send-alt class="w-6 h-6" />
          </a>
        </div>

        <div class="flex flex-wrap justify-between gap-y-4 mt-4">
          <div class="flex gap-x-4">
            <a class="underline" :href="`https://mq1.github.io/mq1/${locale}.pdf`">
              {{ t('download-cv') }}
            </a>

            <router-link v-slot="{ isExactActive }" to="/about-me">
              <div class="underline" :class="isExactActive && 'font-bold'">
                {{ t('about-me') }}
              </div>
            </router-link>

            <router-link v-slot="{ isExactActive }" to="/projects">
              <div class="underline" :class="isExactActive && 'font-bold'">
                {{ t('my-projects') }}
              </div>
            </router-link>
          </div>
          <div class="flex gap-x-4">
            <button class="underline" :class="locale === 'en' && 'font-bold'" @click="locale = 'en'">
              EN
            </button>
            <button class="underline" :class="locale === 'it' && 'font-bold'" @click="locale = 'it'">
              IT
            </button>
          </div>
        </div>
      </header>

      <main class="flex flex-col gap-y-4">
        <router-view />
      </main>

      <footer class="text-center">
        MIT Licensed |
        © 2021 Manuel Quarneti |
        Hosted on Netlify |
        Source code <a class="underline" href="https://github.com/mq1/mq1.eu">here</a>
      </footer>
    </div>
  </div>
</template>
