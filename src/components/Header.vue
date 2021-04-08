<script setup lang="ts">
import { defineEmit } from 'vue'

const emit = defineEmit(['showProjects', 'showAboutMe'])
</script>

<template>
  <header>
    <h1 class="text-5xl font-bold">
      Hi,<br />I'm Manuel Quarneti
    </h1>

    <div class="flex gap-2 mt-2">
      <a href="https://github.com/mq1/">
        <feather-github class="w-6 h-6" />
      </a>
      <a href="https://linkedin.com/in/mq1/">
        <feather-linkedin class="w-6 h-6" />
      </a>
      <a href="mailto:manuelquarneti@gmail.com">
        <feather-at-sign class="w-6 h-6" />
      </a>
      <a href="https://t.me/quarno">
        <feather-send class="w-6 h-6" />
      </a>
    </div>

    <div class="flex justify-between my-8">
      <button class="font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-400" @click="emit('showProjects')">
        My projects
      </button>
      <a target="_blank" href="/cv.pdf" class="font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-400 flex">
        My cv
        <div class="animate-bounce ml-2 mt-1">↓</div>
      </a>
      <button class="font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-400" @click="emit('showAboutMe')">
        About me
      </button>
    </div>
  </header>
</template>
