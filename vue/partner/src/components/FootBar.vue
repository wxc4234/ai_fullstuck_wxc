<!-- FootBar.vue -->
<template>
  <div class="foot">
    <van-row gutter="20">
      <router-link
        to="/home"
        exact
        class="index"
        :style="{ color: isCurrent('/home') ? '#f16748' : '#999' }"
        @click="handleClick('/home', '首页')"
      >
        <van-icon name="wap-home-o" />
        首页
      </router-link>
      <router-link
        to="/message"
        exact
        class="message"
        :style="{ color: isCurrent('/message') ? '#f16748' : '#999' }"
        @click="handleClick('/message', '消息')"
      >
        <van-icon name="chat-o" />
        消息
      </router-link>
      <router-link
        to="/mine"
        exact
        class="mine"
        :style="{ color: isCurrent('/mine') ? '#f16748' : '#999' }"
        @click="handleClick('/mine', '我的')"
      >
        <van-icon name="manager-o" />
        我的
      </router-link>
    </van-row>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const router = useRouter();
const store = useStore();

const isCurrent = (path) => {
  return router.currentRoute.value.path === path;
};

const handleClick = (path, page) => {
  // 触发状态更新
  store.dispatch('updateCurrentPage', page);
  // 导航到点击的路径
  router.push(path);
};
</script>

<style lang="less" scoped>
.foot {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #fff;
  z-index: 999;
  font-size: 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .van-icon {
    font-size: 20px;
  }

  .index,
  .message,
  .mine {
    padding: 35px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    text-decoration: none;
  }
}
</style>
