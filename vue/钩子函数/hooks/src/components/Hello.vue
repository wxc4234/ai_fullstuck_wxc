<template>
  <div>
    <p>{{ count }}</p>
    <button @click="()=> count++"></button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  console.log('子组件中的onMounted')
})

</script>

<style lang="css" scoped>

</style>