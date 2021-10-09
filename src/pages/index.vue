<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <h2>
    {{ t('hi') }}
  </h2>
  <a href="https://github.com/mq1">
    <carbon-logo-github style="scale: 1.5; padding-right: 16px; padding-left: 5px;" />
  </a>
  <a href="https://linkedin.com/in/mq1/">
    <carbon-logo-linkedin style="scale: 1.5; padding-right: 16px;" />
  </a>
  <a href="mailto:manuelquarneti@gmail.com">
    <carbon-email style="scale: 1.5; padding-right: 16px;" />
  </a>
</template>
