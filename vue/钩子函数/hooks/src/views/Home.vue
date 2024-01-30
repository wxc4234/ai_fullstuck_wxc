<template>
  <div>
    <p>home page</p>
    <keep-alive>
      <component :is="Hello"></component>
    </keep-alive>
    <Hello />
  </div>

</template>

<script setup>
import Hello from '../components/Hello.vue'
import { onMounted } from 'vue'

onMounted(() => {
  console.log('home页面中的onMounted')
})

</script>

<style lang="css" scoped>

</style>