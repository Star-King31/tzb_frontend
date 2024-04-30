<script lang="ts" setup>
import { formatDateTime } from '@/utils'
import { login } from '@/api/user'
import { useStore } from '@/stores'

const time = ref(new Date().getTime())

onMounted(async () => {
  await login({
    username: 'admin',
    password: '123456'
  })
  setInterval(() => {
    time.value = new Date().getTime()
  }, 1000)
})
</script>

<template>
  <h1>现在是 {{ formatDateTime(time) }}</h1>
  <NText>{{ useStore.user.state.token }}</NText>
</template>

<style scoped></style>
