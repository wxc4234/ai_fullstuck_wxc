<template>
    <Header />

  <div class="goodVideo">
    <video
      class="video"
      src="https://www.runoob.com/try/demo_source/movie.mp4"
      controls
      preload="auto"
    >
    </video>
  </div>

  <div class="goodTitle" @click="synopsis">
    <text class="title">商品标题</text>
  </div>

  <div class="goodMsg">
    <text class="need" @click="baseNeed">基本要求</text>
    <text class="revenue" @click="preReve">预计收入</text>
  </div>

  <div class="price">
    <text class="firm" @click="price">公司名称：团购价，市场价</text>
  </div>

  <div class="nextGood">
    <router-link to="/nextgood" style="color: #e7e8aa; margin-left: 10px"
      >下一个商品</router-link>
  </div>
</template>

<script setup>
// import Logo from "@/components/Logo.vue";
import Header from "@/components/Header.vue";
import router from "@/router";


const synopsis = () => {
  router.push("/synopsis");
}
const baseNeed = () => {
  router.push("/baseneed");
}
const preReve = () => {
  router.push("/prereve");
}
const price = () => {
  router.push("/price");
}
</script>

<style lang="less" scoped>
.goodVideo {
  position: relative;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 80%;
  .video {
    width: 100%;
    border-radius: 6px;
  }
}
.goodTitle{
  text-align: center;
  margin-left: 10px;
  margin-bottom: 10px;
  width: 80%;
  .title{
    font-size: 35px;
    color: #E4E76C;
    margin-left: 20px;
  }
}
.goodMsg{
  position: absolute;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 80%;
  top: 56%;
  text-align: center;
  .need{
    position: absolute;
    font-size: 35px;
    color: #E4E76C;
    left: 4%;
  }
  .revenue{
    position: absolute;
    right: 0;
    font-size: 30px;
    color: #e7e8aa;
  }
}
.price{
  position: absolute;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 80%;
  top: 75%;
  .firm{
    color: red;
    font-size: 20px;
  }
}
.nextGood{
  position: absolute;
  top: 10%;
  right: 10px;
  writing-mode: vertical-rl;
  font-size: 35px;
  text-align: center;
  height: 80%;
}
</style>
<style>
body {
  background-color: #4f4c4c;
}
</style>
