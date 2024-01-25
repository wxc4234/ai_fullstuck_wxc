User
<template>
  <img src="../assets/background.jpg" alt="" class="background" />
  <div>
    <span class="text_1">请选择您的居住城市</span>
    <span class="text_2">为您优先推荐附近的异性</span>
  </div>

  <van-field
    v-model="fieldValue"
    is-link
    readonly
    clickable
    input-align="center"
    left-icon="location-o"
    placeholder="请选择您的居住城市"
    class="custom-field"
    @click="showAddress = true"
  />

  <van-popup v-model:show="showAddress" position="bottom" :style="{ height: '60%' }">
    <van-area
      v-show="showAddress"
      :area-list="arealist"
      :show-delete="false"
      show-set-default
      show-search-result
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @confirm="onAreaConfirm"
      @cancel="showAddress = false"
      ref="areaRef"
    />
  </van-popup>

  <van-button type="primary" class="button" @click="onNext">开启交友之旅</van-button>
</template>

<script setup>
import { areaList } from '@vant/area-data';
import { ref } from 'vue';
import { showToast } from 'vant';
import router from '../router';
import { useStore } from 'vuex';



const showAddress = ref(false);
const fieldValue = ref();
const arealist = ref(areaList);
const store = useStore();


const onNext = () => {
  if (!fieldValue.value) {
    showToast('请选择您的居住城市');
  }else {
    router.push('/home');
    console.log('居住城市：', fieldValue.value);
  }
};

const onAreaConfirm = (selectedValues) => {
  const  data =  selectedValues.selectedOptions.map(item => item.text).join('-');
  fieldValue.value = data;
  showAddress.value = false;
  store.dispatch('getAddressAction', fieldValue.value);
};


</script>


<style lang="less" scoped>
.background {
  position: absolute;
  width: 100%;
  height: 100%;
}

.text_1 {
  position: absolute;
  top: 20%;
  left: 0;
  width: 100%;
  font-size: 30px;
  color: #000;
  text-align: center;
  line-height: 100px;
}
.text_2 {
  position: absolute;
  top: 30%;
  left: 0;
  width: 90%;
  height: 100px;
  font-size: 20px;
  color: #000000ae;
  text-align: center;
  font-style: italic;
}

.custom-field {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 80%;
  color: black;
  border-radius: 10px;
  font-size: 18px;
}

.button {
  position: absolute;
  bottom: 10%;
  left: 20%;
  text-align: center;
  width: 63%;
  height: 8%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  background-color: #ed7dac;
  color: white;
  font-size: 20px;
}
</style>