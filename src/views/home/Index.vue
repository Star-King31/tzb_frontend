<script lang="ts" setup>

import HomeProductCardLoading from '@/views/home/components/HomeProductCardLoading.vue'
import image1 from '@/assets/image1.jpg'
import placeholder from '@/assets/placeholder.svg'
import { ArrowBack, ArrowForward } from '@vicons/ionicons5'
import { useSystemStore } from '@/stores/useSystemStore'
import { useSpecialExhibitsStore } from '@/stores/useSpecialExhibitsStore'
import HomeProductCard from '@/views/home/components/HomeProductCard.vue'

const systemStore = useSystemStore()
const specialExhibitStore = useSpecialExhibitsStore()

const totalSlides = [
  image1,
  placeholder,
  image1,
  placeholder
]

onMounted(() => {
  systemStore.fetchData(async () => {
    await specialExhibitStore.fetchSpecialExhibits()
  })
})


</script>

<template>
  <header class="bg-[#f5f5f5] py-20 px-4 md:px-6 lg:py-32">
    <div class="container mx-auto max-w-7xl text-center">
      <h1 class="text-4xl font-bold tracking-tight text-[#333] sm:text-5xl lg:text-6xl">
        释放文化创意的力量
      </h1>
      <p class="mt-6 text-lg text-[#666] lg:text-xl">
        探索一个艺术、文化和创新融合的世界，改变我们的体验和参与方式与文化。
      </p>
    </div>
  </header>
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
  <section class="bg-[#f5f5f5] py-16 px-4 md:px-6">
    <div class="container mx-auto max-w-7xl">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-[#333] mb-6">三星堆文化简介</h2>
          <p class="mt-4 text-lg text-[#666] leading-relaxed indent-8">
            三星堆文化是中国古代的一种重要文化遗产，距今约4000至5000年，是中国早期文明的重要组成部分。三星堆遗址位于四川省广汉市境内，是中国最早的青铜时代遗址之一，也是研究古代中原文明与西南地区文明交流的重要证据之一。
          </p>
          <p class="mt-4 text-lg text-[#666] leading-relaxed indent-8">
            三星堆文化以其独特的青铜文化、玉器文化和陶器文化而闻名于世，展示了古代中国人民的智慧和艺术水平。三星堆遗址的发掘和研究对于探索中国古代文明的起源和发展具有重要意义。
          </p>
        </div>
        <img alt="Decoration"
             class="md:order-first transform scale-105 opacity-75 md:opacity-100 md:scale-100 transition-all duration-500 md:duration-1000 ease-in-out"
             src="../../assets/421be7cb25f942b80599d768f5c4d57f-removebg.png"
             style="object-fit: cover; width: 100%;max-width: 350px;"
        >
      </div>
    </div>
  </section>


  <section class="py-16 px-4 md:px-6">
    <div class="container mx-auto max-w-7xl">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-[#333]">特色展品</h2>
          <p class="mt-4 text-lg text-[#666] indent-8">
            欢迎来到我们的文物展示，这里汇集了精心保护和展示的三星堆文物。我们的展品代表了三星堆文化的精髓，每一件文物都是古代智慧和艺术的结晶。
          </p>
          <div class="mt-6">
            <a
              class="inline-flex items-center rounded-md bg-[#007bff] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#0056b3] focus:outline-none focus:ring-2 focus:ring-[#007bff] focus:ring-offset-2"
              href="#"
            >
              更多展品
            </a>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <HomeProductCard v-for="data in specialExhibitStore.state.specialExhibits" v-if="!systemStore.state.isLoading"
                           :data="data" />
          <HomeProductCardLoading v-for="_ in 4" v-else />
        </div>
      </div>
    </div>
  </section>
  <section class="bg-[#f5f5f5] py-16 px-4 md:px-6">
    <div class="container mx-auto max-w-7xl">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2">

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <HomeProductCardLoading />
          <HomeProductCardLoading />
          <HomeProductCardLoading />
          <HomeProductCardLoading />
        </div>
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-[#333]">手工DIY艺术品</h2>
          <p class="mt-4 text-lg text-[#666] indent-8">
            欢迎来到我们的手工DIY艺术品展区，这里汇集了精心制作的独特艺术品，每一件都是艺术家们用心创作的成果。无论您是初学者还是有丰富经验的手工艺爱好者，这里都有适合您的DIY项目。让我们一起发挥想象力，动手创造属于自己独一无二的艺术品吧！
          </p>
          <div class="mt-6">
            <a
              class="inline-flex items-center rounded-md bg-[#007bff] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#0056b3] focus:outline-none focus:ring-2 focus:ring-[#007bff] focus:ring-offset-2"
              href="#"
            >
              更多展品
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-16 px-4 md:px-6">
    <div class="container mx-auto max-w-4xl">
      <h2 class="text-3xl font-bold tracking-tight text-[#333]">联系我们</h2>
      <p class="mt-4 text-lg text-[#666]">
        有问题或想合作？请填写下面的表格，我们的团队会尽快回复您。
      </p>
      <form class="mt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div>
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="name"
          >
            姓名 - Name
          </label>
          <input
            id="name"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Enter your name"
            type="text"
          />
        </div>
        <div>
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="email"
          >
            邮件 - Email
          </label>
          <input
            id="email"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Enter your email"
            type="email"
          />
        </div>
        <div class="sm:col-span-2">
          <label
            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            for="message"
          >
            消息 - Message
          </label>
          <textarea
            id="message"
            class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Enter your message"
            rows="4"
          ></textarea>
        </div>
        <div class="sm:col-span-2">
          <button
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
            type="submit"
          >
            提交
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped>
.carousel-img {
  width: 100%;
  height: 600px;
  object-fit: cover;
}

.custom-arrow {
  display: flex;
  position: absolute;
  bottom: 25px;
  right: 10px;
}

.custom-arrow button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-right: 12px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.1);
  border-width: 0;
  border-radius: 8px;
  transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-arrow button:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.custom-arrow button:active {
  transform: scale(0.95);
  transform-origin: center;
}

.custom-dots {
  display: flex;
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.custom-dots li {
  display: inline-block;
  width: 12px;
  height: 4px;
  margin: 0 3px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.4);
  transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.custom-dots li.is-active {
  width: 40px;
  background: #fff;
}
</style>
