<script lang="ts" setup>
import { NConfigProvider,NLoadingBarProvider } from 'naive-ui'
import Header from '@/components/Header.vue'
</script>

<template>
  <n-config-provider :theme-overrides="{ common: { fontWeightStrong: '600' } }">
    <n-loading-bar-provider>
    <Header />
    <RouterView style="min-height: calc(100vh - 273px)" />
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<style scoped></style>
