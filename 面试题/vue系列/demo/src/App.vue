<template>
  <div class="hd">
    <input type="text" v-model="msg">
    <button @click="add">添加</button>
  </div>


  <!-- <Child :list="list"/> -->
  <Child :message="message"/>

</template>

<script setup>
import { ref } from 'vue'
import Child from './components/Child_1.vue'

// const list = ref(['html', 'css'])

const msg = ref('')
const message = ref('')
const add = () => {
  // list.value.push(msg.value)
  // msg.value = ''
  message.value = msg.value
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