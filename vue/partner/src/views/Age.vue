<template>
  <img src="../assets/background.jpg" alt="" class="background" />
  <div>
    <span class="text_1">请选择您的出生日期</span>
    <span class="text_2">为您优先推荐合适的异性</span>
  </div>
  <van-field
    v-model="fieldValue"
    is-link
    readonly
    clickable
    input-align="center"
    left-icon="birthday-cake-o"
    placeholder="请选择您的出生日期"
    class="custom-field"
    @click="showDate = true"
  />
  <van-popup v-model:show="showDate" position="bottom" :style="{ height: '60%' }">
    <van-date-picker
      v-show="showDate"
      v-model="currentDate"
      title="选择日期"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="onConfirm"
      @cancel="showDate = false"
    />
  </van-popup>


  <van-button type="primary" class="button" @click="onNext">下一步</van-button>
</template>

<script setup>
import { ref } from "vue";
import { showToast } from "vant";
import router from "../router";
import { useStore } from "vuex";

const showDate = ref(false);
const currentDate = ref(['2024', '01', '01']);
const minDate = new Date(1995, 1, 31);
const maxDate = new Date(2024, 1, 31);

const fieldValue = ref("");
const store = useStore();

const onConfirm = () => {
  const formattedDate = currentDate.value.join('-');
  fieldValue.value = formattedDate;
  showDate.value = false;
  store.dispatch("getAgeAction", fieldValue.value);
};

const onNext = () => {
  if (!fieldValue.value) {
    showToast("请选择您的出生日期");
  } else {
    router.push("/address");
    console.log("出生日期：",store.getters.getAgeGetter);
  }
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
