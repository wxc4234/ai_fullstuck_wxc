<template>
  <!-- 动态类名 不同的状态 已完成 未完成 vue的编程思想 -->
 <li class="todo" :class="{compileted: todo.done,editing}">
  <div class="view">
    <label v-text="todo.text" @dblclick="true"></label>
  </div>
  <input type="text"  v-show="editing" class="edit" :value="todo.text">
 </li>
</template>

<script setup>
import { ref } from 'vue';
defineProps(['todo']);
const editing = ref(false);

</script>

<style  scoped>

</style>