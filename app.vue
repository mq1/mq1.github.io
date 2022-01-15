<script setup lang="ts">
useDark()
</script>

<template>
  <Html lang="en">
    <Head>
      <Title>Manuel Quarneti</Title>
      <Meta name="description" content="Manuel Quarneti's personal website" />
    </Head>
  </Html>

  <div h-screen flex flex-col items-center justify-between p-4 dark:bg-black dark:text-white>
    <div></div>
    <NuxtPage />
    <div>© 2021 Manuel Quarneti</div>
  </div>
</template>
