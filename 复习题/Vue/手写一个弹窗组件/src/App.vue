<template>
  <div>
    {{ count1 }}
    {{ count1 }}

  </div>
</template>

<script setup>
import { ref,computed } from 'vue';

let count = ref(0);

let count1 = computed(() => {
  console.log(111);
  return count.value + 1;
})


</script>

<style lang="css" scoped>

</style>