<template>
  <div>
    <h2>class page</h2>
    <h3>{{ $route.query.name }}</h3>
    <h3>{{ $route.query.age }}</h3>
    <h3>{{ $route.params.name }}</h3>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>