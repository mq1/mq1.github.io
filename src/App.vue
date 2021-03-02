<template>
  <div
    class="flex flex-col h-screen bg-white dark:bg-black dark:text-white text-left"
  >
    <div class="m-auto px-10 sm:px-0">
      <Header />
      <div class="flex justify-around gap-2 py-4">
        <button
          class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-400"
          @click="openProjects"
        >
          My projects
        </button>
        <a
          target="_blank"
          href="/cv/cv.pdf"
          class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-400 flex"
        >
          My cv
          <div class="animate-bounce ml-2 mt-1">↓</div>
        </a>
        <button
          class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-400"
          @click="openAboutMe"
        >
          About me
        </button>
      </div>
      <Projects v-show="isOpen === 'projects'" />
      <AboutMe v-show="isOpen === 'aboutMe'" />
    </div>
    <footer class="text-center py-4 leading-loose">
      <p class="">© 2021 Manuel Quarneti</p>
      <p class="text-gray-500">
        Made with ViteJS, Vue3, TailwindCSS and Feather Icons
      </p>
      <p class="text-gray-500">Hosted on GitHub Pages</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import Projects from "./components/Projects.vue";
import AboutMe from "./components/AboutMe.vue";

const isOpen = ref(null);
const openProjects = () => {
  isOpen.value = isOpen.value === "projects" ? null : "projects";
};
const openAboutMe = () => {
  isOpen.value = isOpen.value === "aboutMe" ? null : "aboutMe";
};

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>
