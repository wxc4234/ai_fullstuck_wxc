<template>
  <van-nav-bar
  title="用户详情"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
  class="detail-header"
/>
<img :src="image" alt="" class="image" />
  <div class="de-body">
    <van-text-ellipsis rows="3" :content="text" expand-text="展开" collapse-text="收起" class="introduction"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();



// 获取传递过来的index数据
const receivedIndex = router.currentRoute.value.query.index;
const image = store.state.data[receivedIndex].image;
const introduction = store.state.data[receivedIndex].introduction;

const onClickLeft = () => {
  router.go(-1);
};

const text = ref(introduction);
</script>

<style lang="less" scoped>
.detail-header{
  background: none;
}
.image {
  margin-left: 20%;
  width: 60%;
  border-radius: 15px;
  margin-top: 35px;
}

.de-body{
  margin: 10px 20px 10px 20px;
  background: #fff;
  border-radius: 15px;
  padding: 10px 10px 10px 10px;
}

.introduction{
  margin: 10px 10px 10px 10px;

  font-size: 15px;
}
</style>