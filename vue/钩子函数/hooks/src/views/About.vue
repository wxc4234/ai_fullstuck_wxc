<template>
  <div>
    about page
    <Hello />
  </div>
</template>

<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'
import {onMounted} from 'vue'
import Hello from '../components/Hello.vue'

// onBeforeRouteLeave((to, from, next) => {
//   console.log(to, from)
// })

onMounted(() => {
console.log('关于页面中的onMounted')
});

</script>

<style lang="css" scoped>

</style>