<script lang="ts" setup>
import { NConfigProvider, NLoadingBarProvider, NMessageProvider } from 'naive-ui'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <NConfigProvider :theme-overrides="{ common: { fontWeightStrong: '600' } }">
    <NMessageProvider>
      <NLoadingBarProvider>
        <div class="flex flex-col justify-between min-h-lvh">
          <Header />
          <RouterView />
          <Footer />
        </div>
      </NLoadingBarProvider>
    </NMessageProvider>
  </NConfigProvider>
</template>

<style scoped></style>
