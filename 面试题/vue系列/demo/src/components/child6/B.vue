<template>
  <div>
    <ul>
      <li v-for="item in list ">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import emitter from './emit';
import { ref } from 'vue';

const list = ref([])
emitter.on('list', (e) => {
  console.log(e);
  list.value = e;
})

</script>

<style lang="css" scoped>

</style>