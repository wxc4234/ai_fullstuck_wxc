<!-- Header.vue -->
<template>
  <div class="header">
    <span class="header-text">{{ currentPage }}</span>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

const currentPage = store.getters.getCurrentPage;
</script>

<style scoped>
/* 样式定义 */
.header {
  text-align: center;
  padding: 10px;

}
.header-text {
  font-size: 20px;
  /* 斜体 */
  font-style: italic;
  /* 阴影 */
  text-shadow: 0 0 20px #fff;
}
</style>
