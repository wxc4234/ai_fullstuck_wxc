<template>
  <div class="header-logo" @click="logo">
    <i class="iconfont icon-changyonglogo35"></i>
  </div>
</template>

<script setup>
import router from "@/router"


const logo = () => {
  router.push('/')
}

</script>

<style lang="less" scoped>
.header-logo {
    margin-top: 5px;
    .icon-changyonglogo35 {
      font-size: 30px;
      color: #c5bfbf;
      margin-left: 10px;
    }
  }
</style>