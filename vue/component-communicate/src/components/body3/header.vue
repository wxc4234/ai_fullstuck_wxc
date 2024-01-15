<template>
   <div class="head">
    <input type="text" v-model="message">
    <button @click="submit">确定</button>
  </div>
</template>

<script>
  export default {
  data() {
      return {
        message:''
      }
  },
  methods: {
    submit() {
      // 把message push到父组件的lists中
      // 如何把子组件的数据源传递到父组件使用
      this.$emit('add', this.message) //发布add事件
      this.message = ''
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>