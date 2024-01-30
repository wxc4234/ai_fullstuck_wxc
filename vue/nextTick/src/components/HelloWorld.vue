<template>
  <div>
    <p ref="refP">消息: {{ message }}</p>
    <button @click="updateMessage">更新消息</button>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted} from 'vue'

const message = ref('初始消息')

const refP = ref(null)
console.log(refP.value); //null, 因为组件还没有渲染，

nextTick(() => {
  console.log(refP.value,'nextTick');
})//组件渲染完成后，refP.value才有值

onMounted(() => {
  console.log(refP.value,'onMounted');
})


// setTimeout(() => {
//   console.log(refP.value); // <p>消息: 初始消息</p>
// }, 0)

// const updateMessage = () => {
//   message.value = '更新消息'
// }
</script>

<style lang="css" scoped>

</style>