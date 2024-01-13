<template>
  <div>
    <SimpleHeader title="新增地址" />

    <van-address-edit
  :area-list="arealist"
  :show-delete="false"
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>

  </div>
</template>

<script setup>
import SimpleHeader from '../components/SimpleHeader.vue';
import { ref } from 'vue'
import { showToast } from 'vant';
import { areaList } from '@vant/area-data';
import { addAddress } from '@/api/address.js';
import { useRouter } from 'vue-router';

const searchResult = ref([])
const onChangeDetail = () => {
        searchResult.value = [];
}
const arealist = ref(areaList)
const router = useRouter()
const onSave = async (info) => {
  const params = {
    userName: info.name,
    userPhone: info.tel,
    provinceName: info.province,
    cityName: info.city,
    regionName: info.county,
    detailAddress: info.addressDetail,
    defaultFlag: info.isDefault ? 1 : 0
  }
  const res = await addAddress(params)
  console.log(res);
  if (res.resultCode === 200) {
    showToast({ message: '保存成功' })
    setTimeout(() => {
      router.back()
    }, 1500);
  }
}
</script>

<style lang="less" scoped>

</style>