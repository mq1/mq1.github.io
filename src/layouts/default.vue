<template>
  <div class="dark:bg-black dark:text-white">
    <div class="flex flex-col justify-between gap-y-8 min-h-screen max-w-7xl mx-auto p-4 sm:p-8">
      <Header />

      <main class="flex flex-col gap-y-4">
        <router-view />
      </main>

      <Footer />
    </div>
  </div>
</template>
