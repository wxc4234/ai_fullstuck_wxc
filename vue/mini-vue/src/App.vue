<template>
  <div>
    <p>{{ state.count }}</p>
    <p>{{ num }}</p>
    <button @click="() => state.count++">add</button>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch, watchEffect } from "vue";
import { effect } from "./reactivity/effect.js"


const age= ref(18);


// const state = reactive({
//   count: 1,
//   msg: 2
// });


// const num = computed(() => {
//   return state.count * 10;
// });

// watch(
//   () => state.count,
//   (newVal, oldVal) => {
//     console.log(newVal, oldVal);
//   }
// );

// watchEffect(
//   () => {
//     console.log("watchEffect",state.count);
//   },
//   {
//     flush: "pre",
//     onTrack: () => {
//       console.log("onTrack，会在count收集依赖时触发");
//     },
//     onTrigger: () => {
//       console.log("onTrigger，会在count依赖触发更新时触发");
//     }
//   }
// )

// effect(() => { //类似于生命周期
//   console.log("effect");
// },
//   {
//     lazy: false,
//     scheduler: () => { //当调度函数生效时，副作用函数就不再触发了
//       console.log("scheduler");
//     }
//     });
</script>

<style lang="css" scoped></style>
