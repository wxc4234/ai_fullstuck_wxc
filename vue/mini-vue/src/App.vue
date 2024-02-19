<template>
  <div>
    <p>{{ state.count }}</p>
    <p>{{ num }}</p>
    <button @click="() => state.msg++">add</button>
  </div>
</template>

<script setup>
import { computed, reactive, watch } from "vue";
import { effect } from "./reactivity/effect.js"

const state = reactive({
  count: 1,
  msg: 2
});

const num = computed(() => {
  return state.count * 10;
});

watch(
  () => state.count,
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  }
);

effect(() => { //类似于生命周期
  console.log("effect");

});
</script>

<style lang="css" scoped></style>
