<template>
  <div class="nav">
    <router-link to="/home">首页</router-link>
    <router-link to="/hot">沸点</router-link>
    <router-link to="/class">课程</router-link>
  </div>

<div class="page">
  <router-view></router-view>
</div>
<!-- 路由路口：所有配了路由的页面都会在该路口展示 -->
<router-view></router-view>


</template>

<script>
  export default {

  }
</script>

<style lang="css" scoped>

.nav{
  width: 800px;
  background-color: aqua;
  margin: 0 auto;
  font-size: 30px;
  padding: 10px 20px;
}
a{
  text-decoration: none;
  margin-right: 30px;
}
.page{
  width: 1000px;
  margin: 0 auto;
  background: #e7e7e7;
  height: 1000px;
  font-size: 24px;
  padding: 30px;
}
</style>