<template>
  <div >
    <Rate :value="score" theme="red" @update-rate="update"/>
    <!-- <Rate :value="score" theme=""/> -->
  </div>
</template>

<script setup>
import Rate from './components/Rate.vue'
import { ref } from 'vue'
const score = ref(1)
// vue开发思想是，数据与界面状态同步
const update = (num) => {
  score.value = num

}
// 实现接收子组件的更新请求


</script>

<style  scoped>

</style>