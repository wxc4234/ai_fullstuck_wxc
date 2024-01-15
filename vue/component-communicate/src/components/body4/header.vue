<template>
  <div class="head">
    <input type="text" v-model="message" />
    <button @click="submit">确定</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    message: ''
  },
  methods: {
    ...mapMutations(['addLists']),
    submit() {
      // 将message存入仓库中
      this.addLists(this.message)
    }
  }
};
</script>

<style lang="css" scoped></style>
