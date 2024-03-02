<script setup lang="ts">

</script>

<template>
  <!--
    当加载一个异步组件 在没有加载之前，用Suspense 显示一个占位符
    懒加载，页面组件加载出来之前，显示loading -->
  <Suspense >
    <router-view />
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

<style scoped>

</style>
