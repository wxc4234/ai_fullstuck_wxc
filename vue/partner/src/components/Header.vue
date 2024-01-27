<!-- Header.vue -->
<template>
  <div class="header">
    <span>{{ currentPage }}</span>
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
  background-color: #f0f0f0;
}
</style>
