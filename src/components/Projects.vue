<script setup lang="ts">
const projects = [
  {
    name: 'ALI (Arch Linux Installer)',
    url: 'https://mq1.eu/ali',
    repo: 'https://github.com/mq1/ali',
    desc: 'A (broken) Arch Linux Installer written in bash',
  },
  {
    name: 'top-for-spotify',
    url: 'https://mq1.eu/top-for-spotify/',
    repo: 'https://github.com/mq1/top-for-spotify',
    desc: 'A Spotify stats visualizer written with ViteJS, Vue3, TypeScript, Windi CSS, HeroIcons and Inter Font',
  },
  {
    name: 'mq1',
    url: '/cv.pdf',
    repo: 'https://github.com/mq1/mq1',
    desc: 'My cv with automatic HTML and PDF generation using Pandoc',
  },
  {
    name: 'Lurkmore',
    url: 'https://github.com/mq1/lurkmore',
    repo: 'https://github.com/mq1/lurkmore',
    desc: 'A (laggy) imageboard client, I coded this when exploring Dart and Flutter',
  },
  {
    name: 'This website',
    url: '/',
    repo: 'https://github.com/mq1/mq1.eu',
    desc: 'This website is open source and uses ViteJS, Vue3, TypeScript, Windi CSS, Feather Icons and Inter Font',
  },
]
</script>

<template>
  <div class="max-w-3xl p-10 sm:shadow-xl sm:rounded-2xl border-2 flex flex-col divide-y-2 divide-dashed">
    <div v-for="project in projects" :key="project.name" class="p-8">
      <h2 class="flex justify-between">
        <a class="text-xl underline" :href="project.url">{{ project.name }}</a>
        <a rel="noopener" target="_blank" :href="project.repo">
          <feather-github class="w-6 h-6" />
        </a>
      </h2>
      <p>{{ project.desc }}</p>
    </div>
  </div>
</template>
