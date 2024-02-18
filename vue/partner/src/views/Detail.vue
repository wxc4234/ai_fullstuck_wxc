<template>
  <van-nav-bar
  title="详情"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  class="detail-header"
/>

  <div>
    <p>Received index: {{ receivedIndex }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// 获取传递过来的index数据
const receivedIndex = router.currentRoute.value.query.index;

const onClickLeft = () => {
  router.go(-1);
};
</script>

<style lang="less" scoped>
.detail-header{
  background: none;
}
</style>