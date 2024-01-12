<template>
  <van-action-bar>
    <van-action-bar-icon icon="chat-o" text="客服" />
    <van-action-bar-icon
      icon="shopping-cart-o"
      text="购物车"
      :badge="badgeNum"
    />
    <van-action-bar-button
      color="linear-gradient :"
      type="warning"
      text="加入购物车"
      @click="handleaddCart"
    />
    <van-action-bar-button color="" type="danger" text="立即购买" />
  </van-action-bar>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import { addCart } from "@/api/cart.js";
import { defineProps } from "vue";
import { showSuccessToast} from 'vant';

const props = defineProps({
  id: String
})

const store = useStore(); //仓库的实例对象
const badgeNum = computed(() => {
  if (store.state.cartCount >= 1) {
    return store.state.cartCount;
  }
});


onMounted(() => {
    store.dispatch("setcartCountAction"); //store中 actions 里面的函数都要用 dispatch 来触发
  });

const handleaddCart = async() => {
 const res= await addCart({ goodsCount: 1, goodsId: props.id })
  if(res.resultCode===200){
    showSuccessToast('加入购物车成功')
    store.dispatch("setcartCountAction"); //store中 actions 里面的函数都要用 dispatch 来触发
  }
 }
</script>

<style lang="less" scoped></style>

<style>
.van-action-bar .van-button--warning {
  background: linear-gradient(to right, #6bd8d8, #1baeae);
}
.van-action-bar .van-button--danger {
  background: linear-gradient(to right, #0dc3c3, #098888);
}
</style>
