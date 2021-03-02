<template>
  <div>
    <div
      v-for="(item, name) in projects"
      :key="name"
      class="box-border p-4 my-4 border-2 rounded"
    >
      <h2 class="flex justify-between">
        <a class="text-xl underline" :href="item.url">{{ name }}</a>
        <a rel="noopener" target="_blank" :href="item.repo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
        </a>
      </h2>
      <p>{{ item.desc }}</p>
    </div>
  </div>
</template>

<script setup>
const projects = {
  "ALI (Arch Linux Installer)": {
    url: "https://mq1.eu/ali",
    repo: "https://github.com/mq1/ali",
    desc: "A (broken) Arch Linux Installer written in bash",
  },
  "top-for-spotify": {
    url: "https://mq1.eu/top-for-spotify/",
    repo: "https://github.com/mq1/top-for-spotify",
    desc:
      "A Spotify stats visualizer written with ViteJS, Vue3, TypeScript, TailwindCSS and HeroIcons",
  },
  cv: {
    url: "/cv/cv.pdf",
    repo: "https://github.com/mq1/cv",
    desc:
      "My cv written in XeLaTeX and using Tectonic, feel free to use it as a template",
  },
  Lurkmore: {
    url: "https://github.com/mq1/lurkmore",
    repo: "https://github.com/mq1/lurkmore",
    desc:
      "A (laggy) imageboard client, I coded this when exploring Dart and Flutter",
  },
  "This website": {
    url: "/",
    repo: "https://github.com/mq1/mq1.github.io",
    desc:
      "This website is open source and uses ViteJS, Vue3, TailwindCSS and Feather Icons",
  },
};
</script>