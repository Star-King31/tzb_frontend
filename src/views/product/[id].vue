<script lang="ts" setup>
import { useSpecialExhibitsStore } from '@/stores/useSpecialExhibitsStore'
import { useSystemStore } from '@/stores/useSystemStore'
import ProductDetailLoading from '@/views/product/components/ProductDetailLoading.vue'

const specialExhibitsStore = useSpecialExhibitsStore()
const systemStore = useSystemStore()

onMounted(() => {
  const id = useRoute().params.id as string
  systemStore.fetchData(async () => {
    await specialExhibitsStore.fetchSpecialExhibitById(Number.parseInt(id))
  })
})

</script>

<template>
  <div
    v-if="!systemStore.state.isLoading"
    class="bg-[#f5f5f5] py-12 px-4 md:px-8 lg:px-12"
    style="min-height: calc(100vh - 273px)"
  >
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold text-[#333] mb-4">{{ specialExhibitsStore.state.currentSpecialExhibit?.name }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            :src="specialExhibitsStore.state.currentSpecialExhibit?.image"
            alt="黄金面具"
            class="rounded-md"
            height="400"
            style="aspect-ratio: 500 / 400; object-fit: cover"
            width="500" />
        </div>
        <div>
          <h3 class="text-2xl font-bold text-[#333] mb-4">文物简介</h3>
          <p class="text-[#666] leading-relaxed" style="margin-bottom: 10px">
            {{ specialExhibitsStore.state.currentSpecialExhibit?.description }}
          </p>
          <h3 class="text-2xl font-bold text-[#333] mb-4">文物价值</h3>
          {{ specialExhibitsStore.state.currentSpecialExhibit?.value }}
          <p class="text-[#666] leading-relaxed"></p>
          <h4 class="text-xl font-bold text-[#333] mt-8 mb-2">文物信息</h4>
          <div class="grid grid-cols-2 gap-4">
            <ul class="text-[#666] list-disc pl-6 space-y-2">
              <li><strong>中文名:</strong> {{ specialExhibitsStore.state.currentSpecialExhibit?.name }}</li>
              <li><strong>材质:</strong> {{ specialExhibitsStore.state.currentSpecialExhibit?.material }}</li>
              <li><strong>重量:</strong> {{ specialExhibitsStore.state.currentSpecialExhibit?.weight }}</li>
              <!--              <li><strong>出土地:</strong> {{specialExhibitsStore.state.currentSpecialExhibit?.location}}</li>-->
            </ul>
            <ul class="text-[#666] list-disc pl-6 space-y-2">
              <li><strong>类别:</strong> 金器</li>
              <li><strong>尺寸:</strong>
                <!--                长 {{specialExhibitsStore.state.currentSpecialExhibit?.lenght}} cm, -->
                宽 {{ specialExhibitsStore.state.currentSpecialExhibit?.width }} cm
              </li>
              <li><strong>出土时间:</strong>2021年1月</li>
            </ul>
          </div>

          <div class="mt-8">
            <NButton
              secondary
              type="info"
              @click="$router.push('/home')"
            >
              返回
            </NButton>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ProductDetailLoading v-else
                        class="bg-[#f5f5f5] py-12 px-4 md:px-8 lg:px-12"
                        style="min-height: calc(100vh - 273px)" />
</template>

<style scoped></style>
