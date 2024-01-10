<!-- 这是一个独立的模块，在vue里面叫组件 html+css+js的集合 -->
<template>
  <!-- 负责结构 模版-->
  <div>
    Clicked {{ count }} times,count is {{ eventOrOdd }}
    <button @click="increament">+</button>
    <button @click="decrement">-</button>
    <button @click="increamentIfOdd">Increment if odd</button>
    <button @click="increamentAsync">Increment async</button>
  </div>
</template>

<script setup>
// composition api
// 负责数据和业务
// import { ref , computed} from 'vue';

// const count = ref(0); //简单的响应式数据 复杂的响应式数据 reactive
// // evenOrOdd 不是独立的，与count相关，以count计算后拿到的
// const eventOrOdd = computed(() =>
//   count.value % 2 === 0 ? 'even' : 'odd'
// );
// const increament = () => {
//   count.value++; //不用dom操作，不用关心数据如何渲染到页面上，性能更好
// };
// const decrement = () => {
//   count.value--;
// };
// const increamentIfOdd = () => {
//   if (count.value % 2 === 0) {
//     count.value++;
//   }
// };
// const increamentAsync = () => {
//   setTimeout(increament, 1000);
// };
// export default {
//   // 组件的属性
//   // vue2.0 里面的写法
//   setup() {
//     count,
//     evenOrOdd,
//     increment,
//     decrement,
//     incrementIfOdd,
//     incrementAsync
//    }
// }



// 做进货

import { useCounterStore } from '../store/couter.js'// 导入仓库


const { count }= useCounterStore(); // 从仓库里面拿到count

</script>

<style  scoped>
/* 负责样式 */

</style>