<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Manuel Quarneti',
  meta: [
    { name: 'description', content: 'Manuel Quarneti\'s personal website.' },
  ],
  link: [
    { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
  ],
})

const showProjects = ref(false)
const showAboutMe = ref(false)

const openProjects = () => {
  showProjects.value = !showProjects.value
  showAboutMe.value = false
}
const openAboutMe = () => {
  showAboutMe.value = !showAboutMe.value
  showProjects.value = false
}
</script>

<template>
  <main class="flex flex-col justify-between min-h-screen dark:bg-black dark:text-white">
    <div />
    <div class="md:w-3xl flex flex-col gap-y-8 m-auto my-8">
      <Header @showProjects="openProjects()" @showAboutMe="openAboutMe()" />
      <Projects v-show="showProjects" />
      <AboutMe v-show="showAboutMe" />
    </div>
    <footer class="text-center py-4 leading-loose">
      <p>© 2021 Manuel Quarneti</p>
      <p class="text-gray-500">
        Hosted on Netlify | Source code <a class="underline" href="https://github.com/mq1/mq1.eu">here</a>
      </p>
    </footer>
  </main>
</template>
