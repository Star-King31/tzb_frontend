<script lang="ts" setup>
</script>

<template>
  <div class="shadow-xl card">
    <div class="overflow-hidden cover">
      <img src="../../../assets/placeholder.svg"  style="aspect-ratio: 600 / 400; object-fit: cover" height="400px" width="600px" />
    </div>
    <div class="p-4 bg-white">
      <n-space vertical>
        <n-skeleton height="26px" />
        <n-skeleton height="18px" width="100%" :repeat="2" />
        <n-button round class="mt-4" disabled>查看详情</n-button>
      </n-space>
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
