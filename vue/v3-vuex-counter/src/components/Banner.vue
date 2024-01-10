<template>
  <div>
      <ul>
        <li v-for="banner in banners" :key="banner.id">
          <img :src="banner.pic">
          </li>
      </ul>
  </div>
</template>

<script setup>
import {useBannerStore} from '../store/banner.js';
import { defineProps, onMounted ,toRefs} from 'vue';
const props = defineProps({
  'per-page': {
    type: Number,
    default: 10
  }
})

// 借pinia store banners来到本地组件
const { banners } = toRefs(useBannerStore());
const {getBanners}=useBannerStore();

onMounted(async() => {
  // 先让组件显示出来,用户的第一眼 要快
  // 等组件显示了，再去请求数据 因为js是单线程的
  // const data = await getBannerData();
  // console.log(data);
  await getBanners();
  console.log(banners);


})

</script>

<style  scoped>

</style>