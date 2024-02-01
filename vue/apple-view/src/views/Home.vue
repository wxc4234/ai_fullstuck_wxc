<template>
  <div class="header">
    <Logo />
    <div class="header-menu" v-if="!showSearch && !showPhoneInput">
      <router-link to="/diversion" style="color: darkorange; margin-left: 25px"
        >娱乐</router-link
      >
      <router-link to="/cultivate" style="color: #6389a4; margin-left: 25px"
        >培训</router-link
      >
      <router-link
        to="/commercial"
        style="color: chartreuse; margin-left: 25px; margin-right: 10px"
        >商务</router-link
      >
    </div>
    <div class="header-menu" v-else-if="showSearch">
      <input v-if="showSearch" type="text" placeholder="请输入内容" @click.stop />
    </div>
    <div class="header-menu" v-else-if="showPhoneInput">
      <input v-if="showPhoneInput" type="tel" placeholder="请输入电话号码" @click.stop />
    </div>
    <div class="header-search" @click="toggleSearch">
      <i class="iconfont icon-sousuo"></i>
    </div>
    <div class="header-phone" @click="togglePhoneInput">
      <van-icon name="bag-o" class="bag"/>
    </div>
    <div class="header-login" @click="login">
      <i class="iconfont icon-denglu"></i>
    </div>
  </div>

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
</template>

<script setup>
import Logo from "@/components/Logo.vue";
import router from "@/router";
import { ref } from "vue";

const showSearch = ref(false);
const showPhoneInput = ref(false);

const toggleSearch = () => {
  showSearch.value = !showSearch.value;
  showPhoneInput.value = false;
};

const togglePhoneInput = () => {
  showPhoneInput.value = !showPhoneInput.value;
  showSearch.value = false;
};
const login = () => {
  router.push("/login");
}
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
.header {
  display: flex;
  position: relative;
  .header-menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 10px;
    margin-top: 5px;
    a {
      font-size: 15px;
      text-decoration: none;
    }
    input {
      margin-left: 8px;
      width: 160px;
      background-color: #c5bfbf;
    }
  }
  .header-search {
    position: relative;
    align-items: center;
    margin-top: 9px;
    margin-left: 20px;
    .icon-sousuo {
      font-size: 20px;
      color: #c5bfbf;
      text-align: center;
      cursor: pointer; //鼠标变成小手
    }
  }
  .header-phone{
    position: relative;
    align-items: center;
    margin-top: 7px;
    margin-left: 20px;
    .bag{
      font-size: 20px;
      color: #c5bfbf;
      text-align: center;
    }
  }
  .header-login{
    position: relative;
    align-items: center;
    margin-top: 7px;
    margin-left: 20px;
    .icon-denglu{
      font-size: 25px;
      color: #c5bfbf;
      text-align: center;
    }
  }
}
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
</style>
<style>
body {
  background-color: #4f4c4c;
}
</style>
