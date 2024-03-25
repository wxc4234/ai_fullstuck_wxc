<template>
  <div class="hd">
    <input type="text" name="" id="" v-model="msg">
    <button @click="add">添加</button>
  </div>

</template>

<script setup>
import { ref } from 'vue';

const msg = ref('')
const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})

const emits = defineEmits(['update:list'])

const add = () => {
  const arr = props.list
  arr.push(msg.value)
  // 不要写这种代码：props.list.push(msg.value)

  emits('update:list', arr)
  msg.value = ''
}

</script>

<style lang="css" scoped>

</style>