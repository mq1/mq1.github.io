<script setup lang="ts">
import { ref } from 'vue'

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
  <main class="flex flex-col justify-between min-h-screen">
    <div />
    <div class="flex flex-col gap-y-8 m-auto my-8">
      <Header @showProjects="openProjects()" @showAboutMe="openAboutMe()" />
      <Projects v-show="showProjects" />
      <AboutMe v-show="showAboutMe" />
    </div>
    <footer class="text-center py-4 leading-loose">
      <p>
        © 2021 Manuel Quarneti
      </p>
      <p class="text-gray-500">
        Made with 11ty, Windi CSS, Feather Icons and Inter Font
      </p>
      <p class="text-gray-500">
        Hosted on GitHub Pages
      </p>
    </footer>
  </main>
</template>
