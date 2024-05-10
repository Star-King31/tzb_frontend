<script lang="ts" setup>
</script>

<template>
  <div
    class="bg-[#f5f5f5] py-12 px-4 md:px-8 lg:px-12"
  >
    <div class="container mx-auto">
      <h2 class="text-2xl font-bold text-[#333] mb-4">
        <NSkeleton :height="30" :width="200" />
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <NSkeleton :height="400" :width="500" />
        <div>
          <h3 class="text-2xl font-bold text-[#333] mb-4">文物简介</h3>
          <NSkeleton :height="20" :repeat="3" class="mb-4" />
          <h3 class="text-2xl font-bold text-[#333] mb-4">文物价值</h3>
          <NSkeleton :height="20" class="mb-4" />
          <p class="text-[#666] leading-relaxed"></p>
          <h4 class="text-xl font-bold text-[#333] mt-8 mb-2">文物信息</h4>
          <div class="grid grid-cols-2 gap-4">
            <ul class="text-[#666] list-disc pl-6 space-y-2">
              <li>
                <div class="flex items-center"><strong>中文名:</strong>
                  <NSkeleton class="ml-3" :width="75" />
                </div>
              </li>
              <li>
                <div class="flex items-center"><strong>材质:</strong>
                  <NSkeleton class="ml-3" :width="75" />
                </div>
              </li>
              <li>
                <div class="flex items-center"><strong>重量:</strong>
                  <NSkeleton class="ml-3" :width="75" />
                </div>
              </li>
              <li>
                <div class="flex items-center"><strong>出土地:</strong>
                  <NSkeleton class="ml-3" :width="75" />
                </div>
              </li>
            </ul>
            <ul class="text-[#666] list-disc pl-6 space-y-2">
              <li>
                <div class="flex items-center"><strong>类别:</strong>
                  <NSkeleton class="ml-3" :width="75" />
                </div>
              </li>
              <li>
                <div class="flex items-center"><strong>尺寸:</strong>
                  <NSkeleton class="ml-3" :width="75" />
                </div>
              </li>
              <li>
                <div class="flex items-center"><strong>出土时间:</strong>
                  <NSkeleton class="ml-3" :width="75" />
                </div>
              </li>
            </ul>
            <div class="mt-8">
              <NButton
                type="info"
                secondary
                disabled
              >
                返回
              </NButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
