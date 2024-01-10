import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([{ text: 'pinia', done: false}]);
  return {
    todos
  }
})