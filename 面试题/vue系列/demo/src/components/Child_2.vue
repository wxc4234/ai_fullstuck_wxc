<template>
  <div class="hd">
    <input type="text" name="" id="" v-model="msg">
    <button @click="add">添加</button>
  </div>

</template>

<script setup>
import { ref } from 'vue';

const msg = ref('')
const emits = defineEmits(['add']) //创建一个add事件

const add = () => {
  emits('add', msg.value);
  console.log(msg.value);
  msg.value = '';
}

</script>

<style lang="css" scoped>

</style>