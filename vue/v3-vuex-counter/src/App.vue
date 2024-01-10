<template>
  <!-- 挂载Counter组件 复用 管理 -->
  <!-- <Counter /> -->
  <!-- 写一个TodoList组件 -->
  <!-- <TodoList /> -->
  <h1>推荐</h1>
  <Banner :per-page="3" />

</template>

<script setup>
// 模块化
// import Counter from './components/Counter.vue';
// import TodoList from './components/TodoList.vue';
import Banner from './components/Banner.vue';


</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>