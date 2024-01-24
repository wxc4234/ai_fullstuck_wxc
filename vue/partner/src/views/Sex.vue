<template>
  <!-- <router-link to="/sex"></router-link> -->
  <img src="../assets/background.jpg" alt="" class="background" />

  <div class="main">
    <div class="centered-text">
      <span class="p-text">一拍即合的我们</span>
    </div>

    <van-field
      v-model="fieldValue"
      is-link
      readonly
      label="性别"
      placeholder="选择你的性别"
      @click="showPicker = true"
      class="custom-field"
    />
    <van-popup v-model:show="showPicker" round position="bottom">
      <van-picker
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>


    <van-button type="primary" class="button" @click="onNext">下一步</van-button>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { showToast } from "vant";
import router from "../router";
import { useStore } from "vuex";

const fieldValue = ref("");
const showPicker = ref(false);
const store = useStore();

const columns = ref([
  { text: "男", value: "male" },
  { text: "女", value: "female" },
]);

const onConfirm = ({ selectedOptions }) => {
  showPicker.value = false;
  fieldValue.value = selectedOptions[0].text;
  store.dispatch("updateSex", fieldValue.value);
};

const onNext = () => {
  if (!fieldValue.value) {
    showToast("请选择您的性别");
  } else {
    router.push("/age");
    console.log("性别：",store.getters.putSex);
  }
};
</script>

<style lang="less" scoped>
.main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.centered-text {
  position: absolute;
  top: 20%;
  left: 0;
  width: 100%;
  text-align: center;
}

.p-text {
  font-size: 40px;
  color: pink;
  font-style: italic;
  font-family: "Arial", sans-serif;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.background {
  width: 100%;
  height: 100%;
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
.custom-field {
  z-index: 1000;
  width: 80%;
  background-color: white;
  color: black;
  border-radius: 20px;
  font-size: 18px;
}
</style>
