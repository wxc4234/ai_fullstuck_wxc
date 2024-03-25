<template>
  <div class="hd">
    <input type="text" name="" id="" v-model="msg">
    <button @click="add">添加</button>
  </div>

</template>

<script setup>
import { ref } from 'vue';

const list = ref(['html', 'css'])
const msg = ref('')

const add = () => {
  list.value.push(msg.value)
  msg.value = ''
}

defineExpose({list}) //子组件暴露出去的数据

</script>

<style lang="css" scoped>

</style>