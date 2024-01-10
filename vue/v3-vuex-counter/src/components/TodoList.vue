<template>
  <ul>
      <li v-for="todo in todos" :key="todo.id">
          {{ todo.text }}
      </li>
    </ul>
</template>

<script setup>
import { useTodoStore } from '../store/todo.js'

const { todos } = useTodoStore()

</script>

<style scoped>

</style>