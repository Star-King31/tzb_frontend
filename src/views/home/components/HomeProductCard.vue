<script lang="ts" setup>
import type { SpecialExhibit } from '@/types/specialExhibits'

defineProps<{ data: SpecialExhibit }>()
</script>

<template>
  <div class="shadow-xl card">
    <div
      :style="{ '--text': `'${data.name}'` }"
      class="overflow-hidden cover"
      style="border-top-left-radius: 10px; border-top-right-radius: 10px"
    >
      <img
        :alt="data.name"
        :src="data.image ?? '/placeholder.svg'"
        class="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-300 ease-in-out"
        height="400"
        style="aspect-ratio: 600 / 400; object-fit: cover"
        width="600"
      />
    </div>
    <div class="p-4 bg-white">
      <h3 class="font-bold text-xl">{{ data.name }}</h3>
      <p class="text-sm text-gray-500 line-clamp-2">
        {{ data.description }}
      </p>
      <n-button  @click="$router.push('/product/' + data.id)" round class="mt-4">查看详情</n-button>
    </div>
  </div>
</template>

<style scoped>
.card {
  cursor: pointer;
  transition: all 0.2s linear;
}

.card:hover {
  transform: translateY(-1em);
}

.cover {
  --text: "";
  transition: all 0.5s;
  position: relative;
  cursor: pointer;
}

.cover:hover img {
  transform: scale(1.3);
}

.cover:hover:after {
  content: var(--text);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  width: 100%;
  height: 0;
  top: 0;
  left: 0;
  background: linear-gradient(
    to bottom,
    rgba(86, 86, 86, 0.49),
    rgba(218, 218, 218, 0.5)
  );
  animation: an 0.5s ease-in-out forwards;
}

@keyframes an {
  to {
    height: 100%;
  }
}
</style>
