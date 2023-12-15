<template>
  <div>
   <h2>沸点页面</h2>
   <button @click="goClassPage">去课程页面</button>
  </div>
</template>

<script>
  export default {
  methods: {
      goClassPage() {
      // this.$router.push('/class')
      // this.$router.push({
      //   path: '/class',
      //   query: {
      //     name: 'wxc',
      //     age: 21
      //   }
      // })
      this.$router.push({  name: 'class', params: { name: 'wxc', age: 21 } })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>