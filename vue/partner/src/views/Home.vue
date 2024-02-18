<template>
  <div class="home">
    <Header />
    <!-- vant 轮播图组件 -->
    <van-swipe
      :autoplay="0"
      :indicator-color="'#fff'"
      :indicator-active-color="'#f16748'"
      :show-indicators="false"
      v-model="currentIndex"
      ref="mySwipe"
    >
      <van-swipe-item v-for="(item,index) in datas" :key="index">
        <!-- <img
          :src="item.image"
          alt=""
          class="image"
          @click="handleImageClick(index)"
        />
        <div class="home-bd">
          <text>姓名：{{ item.name }}</text>
          <text>年龄：{{ item.age }}</text>
          <text>职业：{{ item.occupation }}</text>
          <text>婚姻状况：{{ item.maritalStatus }}</text>
          <text>身高：{{ item.height }}</text>
          <text>体重：{{ item.width }}</text>
          <text>籍贯：{{ item.address }}</text>
          <text>性格：{{ item.personality }}</text>
        </div> -->
        <div>
          <img :src="item.image" alt="" class="image" @click="handleImageClick(index)"/>
          <div class="home-bd">
            <text>姓名：{{ item.name }}</text>
          <text>年龄：{{ item.age }}</text>
          <text>职业：{{ item.occupation }}</text>
          <text>婚姻状况：{{ item.maritalStatus }}</text>
          <text>身高：{{ item.height }}</text>
          <text>体重：{{ item.weight }}</text>
          <text>籍贯：{{ item.address }}</text>
          <text>性格：{{ item.personality }}</text>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
    <van-button  @click="prevImage" class="but-left"
      >&lt;</van-button
    >
    <van-button  @click="nextImage" class="but-right"
      >&gt;</van-button
    >
  </div>
  <FootBar />
</template>

<script setup>
import { ref, onMounted} from "vue";
import { useStore } from "vuex";
import Header from "@/components/Header.vue";
import FootBar from "@/components/FootBar.vue";
import router from "@/router";
// import store from "@/store";
// import { closeDialog } from "vant";
// import { fetchDataMen, fetchDataWomen } from "@/api/axios.js";

const datas = ref([]);
const currentIndex = ref(0); // 当前显示图片的索引
const store = useStore();
const mySwipe = ref(null);

// onMounted(async () => {
//   if (store.state.sex === "女") {
//     const res = await fetchDataMen();
//     data.value = res.data.data;
//   } else {
//     const res = await fetchDataWomen();
//     data.value = res.data.data;
//   }
//   console.log(data.value);
// });

onMounted(() => {
  if (store.state.sex === "男") {
    console.log("男");
    datas.value = store.state.data
    console.log(datas.value[1]);
  } else {
    console.log("女");
    datas.value = store.state.data2
    console.log(datas.value[1]);
  }
})

const prevImage = () => {
  mySwipe.value.prev();
};

const nextImage = () => {
  mySwipe.value.next();
};

const handleImageClick = (index) => {
  // 可以在这里处理点击图片后的逻辑
  console.log("Image clicked:", index);
  router.push({
    path: "/detail",
    query: {
      index: index,
    },
  });
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
  width: 70%;
  border-radius: 15px;
  margin-top: 35px;
}

.but-left,
.but-right {
  position: absolute;
  top: 45%;
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

.home-bd {
  position: absolute;
  bottom: 0;
  left: 18%;
  padding: 10px;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  text-align: center;
  width: 59%;
  font-size: 16px;
  color: #6D6D6D;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

}
</style>

<style>
body {
  background: linear-gradient(to bottom, #fbe5db, #f7f7f7);
}
</style>
