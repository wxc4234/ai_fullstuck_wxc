<template>
  <van-tabbar v-model="active" active-color="#1baeae" route>
    <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/category" icon="bar-chart-o">分类</van-tabbar-item>
    <van-tabbar-item to="/cart" icon="cart-o" :badge="badgeNum">购物车</van-tabbar-item>
    <van-tabbar-item to="/user" icon="friends-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

const store = useStore()
const badgeNum = computed(() => {
  if (store.state.cartCount >= 1) {
    return store.state.cartCount;
  }
});

onMounted(() => {
    store.dispatch("setcartCountAction"); //store中 actions 里面的函数都要用 dispatch 来触发
  });

const active = ref(0);

</script>

<style lang="less" scoped>

</style>