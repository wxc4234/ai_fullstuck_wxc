<template>
  <div>
    <input type="text" v-model="msg" />
    <button @click="add">添加</button>
  </div>
</template>

<script setup>
import emitter from './emit.js'
import { onMounted, ref } from "vue";

const list = ref(["html", "css"]);

onMounted(() => {
  emitter.emit("list", list.value);
});

const msg = ref("");
const add = () => {
  list.value.push(msg.value);
  msg.value = "";
};


</script>

<style lang="css" scoped></style>
