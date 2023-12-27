<template>
  <!-- UI + state =Component -->
  <section class="todoapp">
    <!-- html5的语义化功能 -->
    <!-- 表单部分 -->
    <header class="header">
      <h1>todos</h1>
      <!-- 用户体验 autofocus -->
      <input class="new-todo"
      autofocus
      autocomplete="off"
       placeholder="What needs to be done?"
        @keyup.enter="addTodo">
       <!-- @是v-on的缩写，事件修饰符 @event.enter-->

    </header>
    <br><br><br>
    <!-- v-show条件渲染指令 -->
    <!-- todos是所有任务的数组 -->
    <section class="main" v-show="todos.length">
    <input
      class=""
      id="toggle-all"
      :checked = "allChecked"
      @change="toggleAll(!allChecked)"
      type="checkbox" >
    <label for="toggle-all"></label>
    <ul class="todo-list">
      <!-- 组件树  组件结构清晰-->
      <TodoItem
        v-for="(todo,index) in todos"
        :key="index"
        :todo="todo"
         />
    </ul>
  </section>
 </section>
</template>

<script setup>
// vue3 setup 语法糖, 语法更加简洁
import { computed, ref } from 'vue';
import TodoItem from './TodoItem.vue';
const todos = ref([
  {
    text: '吃饭',
    done: true
  },
  {
    text: '睡觉',
    done: false
  }
]);
const allChecked = computed(() => todos.value.every(todo=>todo.done));
const filteredTodos = ref([]);

const addTodo = () => {

}

const toggleAll = () => {

}


</script>

<style scoped>

</style>