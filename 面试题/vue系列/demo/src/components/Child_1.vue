<template>
  <div class="bd">
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue';

const list = ref(['html', 'css'])

// defineProps({
//   list: {
//     type: Array,
//     default: ()=>[]
//   }
// })

defineProps({
  message: String,
  default: ''
})

</script>

<style lang="css" scoped>

</style>