<script lang="ts" setup>

import { IconLogo } from '@/components/icon'

const routes = [
  {
    name: "首页",
    path: "/home"
  },
  {
    name: "预约参观",
    path: "/booking"
  },
  {
    name: "DIY馆",
    path: "/diy-experience"
  },
  {
    name: "DIY分享交流",
    path: "/diy-share"
  },
  {
    name: "我的购物车",
    path: "/my-cart"
  },
  {
    name: "个人中心",
    path: "/profile"
  }
];

</script>

<template>
  <header class="bg-white py-4 px-4 md:px-6 border-b sticky top-0 z-50">
    <div class="container mx-auto max-w-7xl text-center">
      <nav class="flex justify-between items-center">
        <a class="flex items-center text-[#333] font-bold" href="#">
          <IconLogo />
          <span class="text-lg">三星堆DIY工坊</span>
        </a>
        <div class="hidden md:flex items-center space-x-6">
          <RouterLink
            v-for="route in routes"
            active-class="active"
            class="text-[#666] hover:text-[#333] font-medium"
            :to="route.path"
          >
            {{ route.name}}
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.active {
  color: #363636;
  font-weight: bold;
  font-size: 1.2em;
}

.search-container {
  position: relative;
  display: inline-block;
}

input[type="text"] {
  padding: 8px 8px 8px 32px; /* 上、右、下、左 */
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 250px;
  height: 35px;
}

button {
  position: absolute;
  top: 5px;
  left: 5px;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

input[type="text"]:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
</style>
