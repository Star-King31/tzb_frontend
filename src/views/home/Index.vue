<script lang="ts" setup>
import { IconForward } from "@/components/icon";
import HomeProductCard from '@/views/home/components/HomeProductCard.vue'
import { useSpecialExhibitsStore } from '@/stores/useSpecialExhibitsStore'
import HomeProductCardLoading from '@/views/home/components/HomeProductCardLoading.vue'

const specialExhibitsStore = useSpecialExhibitsStore()

onMounted(async ()=>{
  await specialExhibitsStore.fetchSpecialExhibits()
})
</script>

<template>
  <main
    class="py-12 px-4 md:px-8 lg:px-12"
    style="min-height: calc(100vh - 273px)"
  >
    <div
      class="container mx-auto grid grid-cols-1 md:grid-cols-1 gap-8 mt-16 z-50"
      style="position: relative"
    >
      <div class="header">
        <h2 class="text-5xl font-bold text-[#333] mb-4">三星堆文化简介</h2>
        <p
          class="leading-relaxed text-2xl"
          style="text-indent: 2em; color: #692e17"
        >
          三星堆文化是中国古代文明的重要组成部分，距今约4,000多年。位于四川省广汉市境内的三星堆遗址是其代表性发现之一。这片遗址展示了古代中国社会的繁荣与发展。在这个时期，人们创造了许多精美的青铜器和玉器，体现了当时的工艺水平和审美观念。青铜器作为重要的礼仪和祭祀用品，见证了古代人们的宗教信仰和社会习俗。玉器的出现也反映了人们对自然和神秘力量的崇拜。三星堆遗址中的建筑和遗迹，如宫殿、城墙、祭祀台等，不仅是古代社会组织和政治权力的象征，也是对当时社会生活的重要见证。通过对三星堆文化的研究，我们可以更好地了解古代中国人民的生活方式、社会结构和文化传承。
        </p>
      </div>
      <!--        特色展品-->
      <div>
        <div
          class="text-2xl font-bold text-[#333] mt-8 mb-4 title1 flex justify-between"
        >
          <span> 特色展品介绍 </span>
          <div
            class="flex items-center gap-1 text-blue-500 text-xl cursor-pointer"
          >
            <span style="transform: translateY(1px)">查看所有</span>
            <IconForward :size="18" color="#007bff" />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <HomeProductCard
          v-if="!specialExhibitsStore.state.specialExhibitsLoading"
          v-for="data in specialExhibitsStore.state.specialExhibits"
          :data="data"
        />
        <HomeProductCardLoading v-else v-for="_ in 4" />
      </div>
      <!--DIY手工艺术品展示-->
      <div>
        <div
          class="text-2xl font-bold text-[#333] mt-8 mb-4 title1 flex justify-between items-center"
        >
          <span> DIY手工艺术品展示 </span>
          <div
            class="flex items-center gap-1 text-blue-500 text-xl cursor-pointer"
          >
            <span style="transform: translateY(1px)">查看所有</span>
            <IconForward :size="18" color="#007bff" />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
<!--        <HomeProductCard-->
<!--          v-for="data in cards1"-->
<!--          :data="data"-->
<!--        />-->
      </div>
    </div>
  </main>
</template>

<style scoped>
.header {
  background-image: url("/src/assets/home-head-card-bg.jpg");
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 1180px;
  height: 590px;
  margin: 0 auto;
  padding: 60px 40px 40px 380px;
}

.title1 {
  padding: 10px;
  border: 1px solid #9f9f9f;
  border-left: 5px solid #882e08;
  color: #c45124;
}
</style>
