<template>
  <div>
    {{ count }} * 2 = {{ double }}
    <button @click="asyncAdd">async add</button>
    <button @click="add">add</button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const count = computed(() => store.state.count);
const double = computed(() => store.state.double);

const add = () => {
  store.dispatch('add');
}

const asyncAdd = () => {
  store.dispatch('asyncAdd');
}

</script>

<style scoped>

</style>