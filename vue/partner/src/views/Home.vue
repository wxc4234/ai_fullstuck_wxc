<template>
  <div class="home">
    <Header />
    <!-- vant 轮播图组件 -->
    <van-swipe :autoplay="0" :indicator-color="'#fff'" :indicator-active-color="'#f16748'" v-model="currentIndex" ref="mySwipe">
      <van-swipe-item v-for="(item, index) in data" :key="index">
        <img :src="item.image" alt="" class="image" @click="handleImageClick(index)" />
      </van-swipe-item>
    </van-swipe>
    <van-button v-if="data.length > 1" @click="prevImage" class="but-left">&lt;</van-button>
    <van-button v-if="data.length > 1" @click="nextImage" class="but-right">&gt;</van-button>
    <div class="home-bd"></div>
  </div>
  <FootBar />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import Header from '@/components/Header.vue';
import FootBar from '@/components/FootBar.vue';
import { fetchDataMen, fetchDataWomen } from '@/api/axios.js';

const data = ref([]);
const currentIndex = ref(0);  // 当前显示图片的索引
const store = useStore();
const mySwipe = ref(null);

onMounted(async () => {
  if (store.state.sex === '女') {
    const res = await fetchDataMen();
    data.value = res.data.data;
  } else {
    const res = await fetchDataWomen();
    data.value = res.data.data;
  }
  console.log(data.value);
});

const prevImage = () => {
  mySwipe.value.prev();
};

const nextImage = () => {
  mySwipe.value.next();
};

const handleImageClick = (index) => {
  // 可以在这里处理点击图片后的逻辑
  console.log('Image clicked:', index);
};

</script>


<style lang="less" scoped>
/* 你的自定义样式，用于居中和其他样式 */
.home {
  text-align: center;
}

.swipe-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.image {
  width: 63%;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  margin-top: 10px;
}

.but-left,
.but-right {
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: #ddbbaa;
  font-size: 30px;
}

.but-left {
  left: 0;
}

.but-right {
  right: 0;
}

</style>

<style >
body{
  background: linear-gradient(to bottom,  #fbe5db, #f7f7f7);

}
</style>