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
      <input
        v-if="showSearch"
        type="text"
        placeholder="请输入内容"
        @click.stop
      />
    </div>
    <div class="header-menu" v-else-if="showPhoneInput">
      <input
        v-if="showPhoneInput"
        type="tel"
        placeholder="请输入电话号码"
        @click.stop
      />
    </div>
    <div class="header-search" @click="toggleSearch">
      <i class="iconfont icon-sousuo"></i>
    </div>
    <div class="header-phone" @click="togglePhoneInput">
      <van-icon name="bag-o" class="bag" />
    </div>
    <div class="header-login" @click="login">
      <i class="iconfont icon-denglu"></i>
    </div>
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
};
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
  .header-phone {
    position: relative;
    align-items: center;
    margin-top: 7px;
    margin-left: 20px;
    .bag {
      font-size: 20px;
      color: #c5bfbf;
      text-align: center;
    }
  }
  .header-login {
    position: relative;
    align-items: center;
    margin-top: 7px;
    margin-left: 20px;
    .icon-denglu {
      font-size: 25px;
      color: #c5bfbf;
      text-align: center;
    }
  }
}
</style>
