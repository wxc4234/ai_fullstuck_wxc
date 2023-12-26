<template>
  <div :style="fontStyle">
    Rate {{ rate }}
    <!-- value是父组件传递过来的值，rate是计算属性 -->
  </div>
</template>

<script setup>
import { defineProps ,computed} from 'vue' //defineProps 定义属性, computed 计算属性
// 父子组件之间的信任通信
// 外界传输的参数对象
let props=defineProps({
  value: Number,
  // 对参数的校验要求比较复杂的时候，可以使用函数
  theme: {
    type: String,
    default: 'orange'
  }
})
// 计算属性，data/props 再计算一下
let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value))
let fontStyle = computed(() => 'color:${props.theme};')
</script>

<style scoped>

</style>