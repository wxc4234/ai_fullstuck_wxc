<template>
  <div class="head">
    <input type="text" v-model="message" />
    <button @click="submit">确定</button>
  </div>

  <!-- list -->
  <List :lists="lists" />
</template>

<script>
import List from "./components/body2/list.vue";
export default {
  components: {
    List,
  },
  data() {
    return {
      lists: ["html", "css"],
      message: "",
    };
  },
  methods: {
    submit() {
      if (this.message) {
        this.lists.push(this.message);
        this.message = "";
      }
    },
  },
};
</script>

<style lang="css" scoped></style>
