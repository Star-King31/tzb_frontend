<script lang="ts" setup>

import { ArrowBack, ArrowForward } from '@vicons/ionicons5'

defineProps()
</script>

<template>
  <section class="py-16 px-4 md:px-6">
    <div class="container mx-auto">
      <n-carousel autoplay show-arrow>
        <img
          v-for="url in totalSlides"
          :src="url"
          alt=""
          class="carousel-img">
        <template #arrow="{ prev, next }">
          <div class="custom-arrow">
            <button class="custom-arrow--left" type="button" @click="prev">
              <n-icon>
                <ArrowBack />
              </n-icon>
            </button>
            <button class="custom-arrow--right" type="button" @click="next">
              <n-icon>
                <ArrowForward />
              </n-icon>
            </button>
          </div>
        </template>
        <template #dots="{ total, currentIndex, to }">
          <ul class="custom-dots">
            <li
              v-for="index of total"
              :key="index"
              :class="{ ['is-active']: currentIndex === index - 1 }"
              @click="to(index - 1)"
            />
          </ul>
        </template>
      </n-carousel>
    </div>
  </section>
</template>

<style scoped>

</style>
