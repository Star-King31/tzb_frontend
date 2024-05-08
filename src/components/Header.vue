<script lang="ts" setup>


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
  <header
    class="py-2 px-4 md:px-8 lg:px-12"
    style="
      position: sticky;
      top: 0;
      z-index: 99;
      background-color: white;
      box-shadow: 5px 5px 5px rgba(126, 123, 123, 0.16);
    "
  >
    <img
      src="../assets/logo1.png"
      alt=""
      style="
        top: 10px;
        left: 50px;
        height: 80px;
        width: 80px;
        position: absolute;
      "
    />
    <div class="container mx-auto">
      <!--      <IconLogo />-->
      <img
        src="../assets/gyxs-removebg-preview.png"
        alt=""
        style="transform: translateX(-22px)"
      />
    </div>
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex items-center space-x-8">
        <nav class="hidden md:flex items-center space-x-6">
          <RouterLink
            v-for="route in routes"
            active-class="active"
            class="text-[#666] hover:text-[#333] font-medium"
            :to="route.path"
          >
            {{ route.name}}
          </RouterLink>
        </nav>
      </div>
      <div class="search-container">
        <input placeholder="搜索..." type="text" />
        <button>
          <svg
            class="icon"
            height="24"
            p-id="13905"
            t="1714624116414"
            version="1.1"
            viewBox="0 0 1024 1024"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M964.096 963.072l-249.6-297.216c54.016-54.272 92.672-124.928 107.008-205.824 17.92-102.144-4.864-205.056-64.256-290.304-59.392-84.992-148.736-141.824-251.136-160C294.912-27.392 92.928 114.176 55.808 325.12c-17.92 102.144 4.864 205.056 64.256 290.304 6.656 9.472 13.824 18.432 21.248 27.648 29.44 35.072 64 64 102.912 86.016 28.672 16.64 59.648 29.696 92.672 38.144 11.264 2.816 23.04 5.632 34.56 7.68 12.032 2.048 23.296 3.584 34.56 4.608 92.672 7.68 182.016-17.92 254.208-68.096L909.824 1008.64c5.376 6.4 15.104 7.424 21.76 1.792l30.72-25.856c6.4-5.376 7.424-15.104 1.792-21.504zM383.744 705.28c-83.712-14.592-156.672-61.44-205.312-130.56-48.896-69.632-67.584-153.856-52.736-237.312C156.16 164.864 321.536 49.408 494.336 79.616c74.24 13.312 140.288 51.2 188.416 108.032 5.888 7.424 11.776 14.592 16.896 22.528 48.896 69.632 67.072 153.6 52.736 237.312-30.464 172.544-195.84 288.256-368.64 257.792z"
              fill="#515151"
              p-id="13906"
            ></path>
          </svg>
        </button>
      </div>
      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-4">
          <a
            class="bg-[#007bff] text-white px-4 py-2 rounded-md hover:bg-[#0056b3]"
            href="#"
          >
            登录 </a
          ><a
          class="bg-[#28a745] text-white px-4 py-2 rounded-md hover:bg-[#1e7e34]"
          href="#"
        >
          预约参观
        </a>
        </div>
      </div>
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
