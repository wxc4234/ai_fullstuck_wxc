<template>
  <div class="hd">
    <input type="text" v-model="msg">
    <button @click="add">添加</button>
  </div>


  <!-- <Child :list="list"/> -->
  <Child />

</template>

<script setup>
import { ref,provide } from 'vue'
import Child from './components/Child_5.vue'


const msg = ref('')
const list = ref(['html', 'css'])

provide('list', list.value);

const add = () => {
  list.value.push(msg.value)
  msg.value = ''
}

</script>

<style lang="css" scoped>

.hd input{
  width: 200px;
  padding: 10px 0;
  font-size: 10px;
}
.hd button{
  padding: 10px 20px;
  font-size: 20px;
}

</style>