<template>
  <div>
    <button @click="updateList">更新列表</button>
    <ul>
     <li v-for="n in list" :key="n">{{ n }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { myNextTick } from '../next-tick'

const list = ref(new Array(20).fill(0))

const updateList = () => {
  list.value.push(...(new Array(10).fill(1)))
} //只会获得第一个li元素，因为这个时候还没有渲染出来，所以获取不到

myNextTick(() => {
  const liItem = document.querySelector('li:last-child')
  liItem.scrollIntoView({behavior: 'smooth'})
})
</script>

<style lang="css" scoped>
li{
  height: 100px;
  background-color: green;
  margin-bottom: 10px;
}
</style>