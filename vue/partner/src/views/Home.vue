<template>
  <div>
    home
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchData } from '@/api/axios.js'

const data = ref([])

onMounted(async () => {
  const res = await fetchData()
  data.value = res.data
  console.log(data.value)
})

</script>

<style lang="less" scoped>

</style>