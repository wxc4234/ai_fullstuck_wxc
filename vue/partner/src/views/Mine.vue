<template>
   <Header />
  <div class="myInfo">
    <img src="../images/women/6.png" class="myImage" alt="头像" mode="aspectFit" />
    <text class="name">游客</text>
    <van-icon name="arrow" class="arrow"/>
    <div class="digital">
      <van-row class="digital">
        <van-col span="6">
          <van-cell title="0" label="我关注的" class="van-cell__title"/>
        </van-col>
        <van-col span="6" class="row">
          <van-cell title="0" label="关注我的" class="van-cell__title"/>
        </van-col>
        <van-col span="6" class="row">
          <van-cell title="0" label="发起聊天" class="van-cell__title"/>
        </van-col>
        <van-col span="6" class="row">
          <van-cell title="0" label="最近访问" class="van-cell__title"/>
        </van-col>

      </van-row>
    </div>
  </div>
  <div class="funtion">

  </div>
  <FootBar />
</template>

<script setup>
import FootBar from '@/components/FootBar.vue';
import Header from '@/components/Header.vue'

</script>

<style lang="less" scoped>

.myInfo{
  background-color: rgba(255, 255, 254, 0.8);
  border-radius: 10px;
  margin: 20px 15px 10px 15px;
  // display: flex;
  position: relative;
  .myImage{
    // 圆形头像
    border-radius: 50%;
    // max-height: 120px;
    width: 80px;
    height: 80px;
    margin: 8px 10px 10px 10px;

  }
  .name{
    font-size: 25px;
    color: #000;
    margin-top: 20px;
    position: absolute;
    top: 0;
  }
  .arrow{
    font-size: 20px;
    position: absolute;
    right: 10px;
    top: 50px;
    transform: translateY(-50%);
    color: #E28A90;
  }
  .detail{
    top: 50%;
    font-size: 15px;
    // 透明背景

    color: #000;
  //  使容器内的元素排在一行
    position: absolute;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
    // left: 0;
  }
  .van-cell__title{
    text-align: center;
  }
}
</style>