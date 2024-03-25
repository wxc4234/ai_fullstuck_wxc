<template>
  <div class="bd">
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref,inject } from 'vue'

const list = inject('list')

</script>

<style lang="css" scoped>

</style>