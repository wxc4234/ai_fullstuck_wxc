<template>
  <Header />
  <div class="message">
    <i class="iconfont icon-xiaoxi1 xiaoxi" @click="xitong">
      <text class="wenzi">系统消息</text>
    </i>
    <i class="iconfont icon-icon_xihuan xihuan1" @click="orther">
      <text class="wenzi">他人发起的</text>
      </i>
    <i class="iconfont icon-icon_xihuan xihuan2" @click="my">
      <text class="wenzi">我发起的</text>
    </i>
  </div>
  <div class="notMessage">
    <i class="iconfont icon-meiyouxiaoxi">
      <text class="not">暂无消息</text>
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
.notMessage{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #f3b4be;
  margin-top: 80px;
  .icon-meiyouxiaoxi{
    font-size: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .not{
    font-size: 20px;
  }
}
</style>
