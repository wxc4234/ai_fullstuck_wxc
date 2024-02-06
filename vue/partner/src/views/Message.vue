<template>
  <Header />
  <div class="message">
    <i class="iconfont icon-xiaoxi1 xiaoxi">
      <text class="wenzi">消息</text>
    </i>
    <i class="iconfont icon-icon_xihuan xihuan1">
      <text class="wenzi">他人发起的</text>
      </i>
    <i class="iconfont icon-icon_xihuan xihuan2">
      <text class="wenzi">我发起的</text>
    </i>
  </div>
  <FootBar />
</template>

<script setup>
import FootBar from "@/components/FootBar.vue";
import Header from "@/components/Header.vue";
</script>

<style lang="less" scoped>
.message {
  display: flex;
  justify-content: space-around;
  margin-top: 90px;
  max-width: 320px;
  margin-left: 30px;
  height: 80px;
  border-radius: 10px;
  align-items: center;
  background-color: #fff4ef;
  .xiaoxi {
    font-size: 25px;
    color: #ace8fc;
    margin-right: 10px;
    // 使文字在图标下面
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .xihuan1 {
    font-size: 25px;
    margin-right: 10px;
    color: #f3bc75;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .xihuan2 {
    font-size: 25px;
    margin-right: 10px;
    color: #f3b4be;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .wenzi{
      font-size: 15px;
    }
}
</style>
