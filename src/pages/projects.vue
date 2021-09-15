<script setup lang="ts">
const { t } = useI18n()

const projects = [
  {
    name: 'runmc',
    url: 'https://github.com/mq1/runmc',
    repo: 'https://github.com/mq1/runmc',
    desc: 'projects.runmc',
    tech: [
      'Tauri',
      'Rust',
      'ViteJS',
      'Vue',
      'TypeScript',
    ],
  },
  {
    name: 'ALI (Arch Linux Installer)',
    url: 'https://mq1.eu/ali',
    repo: 'https://github.com/mq1/ali',
    desc: 'projects.ali',
    tech: [
      'BASH',
    ],
  },
  {
    name: 'top-for-spotify',
    url: '/top-for-spotify/',
    repo: 'https://github.com/mq1/top-for-spotify',
    desc: 'projects.spotify',
    tech: [
      'ViteJS',
      'Vue',
      'TypeScript',
    ],
  },
  {
    name: 'mq1',
    url: 'https://github.com/mq1/mq1',
    repo: 'https://github.com/mq1/mq1',
    desc: 'projects.mq1',
    tech: [
      'Pandoc',
      'Markdown',
      'LaTeX',
    ],
  },
  {
    name: 'Lurkmore',
    url: 'https://github.com/mq1/lurkmore',
    repo: 'https://github.com/mq1/lurkmore',
    desc: 'projects.lurkmore',
    tech: [
      'Flutter',
    ],
  },
  {
    name: 'This website',
    url: '/',
    repo: 'https://github.com/mq1/mq1.eu',
    desc: 'projects.website',
    tech: [
      'ViteJS',
      'Vue',
      'TypeScript',
    ],
  },
]
</script>

<template>
  <div class="flex flex-col divide-y">
    <div v-for="project in projects" :key="project.name" class="flex flex-col gap-y-2 py-4">
      <h2 class="flex justify-between">
        <a class="text-xl underline" :href="project.url">{{ project.name }}</a>
        <a rel="noopener" target="_blank" :href="project.repo">
          <feather-github class="w-6 h-6" />
        </a>
      </h2>
      <p>{{ t(project.desc) }}</p>
      <div>
        <i v-for="tech in project.tech" :key="tech" class="text-gray-500 dark:text-gray-400">
          #{{ tech }}
        </i>
      </div>
    </div>
  </div>
</template>
