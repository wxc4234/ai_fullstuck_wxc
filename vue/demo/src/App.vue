<template>
  <div class="todo">
    <!-- v-model是 vue 的一个指令，它可以实现双向数据绑定，即数据改变，视图也会改变，视图改变，数据也会改变。 -->
    <input type="text" v-model="content">
    <button @click="add">添加</button>

    <!-- list.vue -->
    <List :lists="todo"></List>
  </div>

</template>

<script>
import List from './components/List.vue'
export default {
  components: {
      List
    },
  data() {
      return {
        content: '',
        todo: ['html', 'css', 'js']
      }
  },
  methods: {
    add() {
      console.log(this.content);
      this.todo.push(this.content);
    }
  }
  }
</script>

<style lang="css">
*{
  margin: 0;
  padding: 0;

}
#app{
  text-align: center;
  font-size: 30px;
}
.todo{
  width: 300px;
  margin: 0 auto;
}
input{
  padding: 5px 10px;
}
button{
  padding: 5px 10px;

}
li{
  list-style: none;
  background-color: aliceblue;
  margin-top: 10px;
}
</style>