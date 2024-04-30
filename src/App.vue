<script lang="ts" setup>
import { NConfigProvider } from 'naive-ui'

const a = ref(1)
console.log(a.value)
</script>

<template>
  <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } }">
    <RouterView />
  </n-config-provider>
</template>

<style scoped></style>
