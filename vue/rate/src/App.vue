
<script setup>

// 响应式思想
// vue3 语法 ref 代替了 vue2 的 data，就表示响应式
import { ref } from 'vue'
// 组件化思想
import Rate from './components/Rate.vue'
// vue 主要工作开发组件
let score = ref(3) //data
setTimeout(() => {
  // 会发生状态的改变
  // 组件 = UI + 数据状态
  score.value = 4  // 页面会自动更新
}, 2000)
</script>


<template>
  <div>
    <!-- 评分组件, 5颗星星, 点亮 组件思维-->
  </div>
  <Rate :value="score"/>
  <Rate :value="score" theme="red"/>
  <!-- theme是属性，red是属性值 -->
  <!-- 动态数据绑定 -->
</template>

<style scoped>

</style>