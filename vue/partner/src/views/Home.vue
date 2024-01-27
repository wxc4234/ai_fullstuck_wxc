<template>

  <div class="home">
    <Header />
    <div class="home-md"></div>
    <div class="home-bd"></div>
  </div>
  <FootBar />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchData } from '@/api/axios.js'
import Header from '@/components/Header.vue'
import FootBar from '@/components/FootBar.vue';

const data = ref([])

onMounted(async () => {
  const res = await fetchData()
  data.value = res.data
  console.log(data.value)
})

</script>

<style lang="less" scoped>
.home {
  // 渐变色，由上到下
}

</style>
<style >
body{
  background: linear-gradient(to bottom,  #fbe5db, #f7f7f7);

}
</style>