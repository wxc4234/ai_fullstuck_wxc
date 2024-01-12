<template>
  <div class="cart-box">
    <SimpleHeader title="购物车" :back="false" />

    <div class="cart-body">
      <van-checkbox-group v-model="result" @change="groupChange">
        <!-- 循环输出list中的信息 -->
        <van-swipe-cell v-for="item in list" :key="item.id">
          <van-checkbox :name="item.cartItemId"></van-checkbox>
          <van-card
            :num="item.goodsCount"
            :price="item.sellingPrice"
            :title="item.goodsName"
            class="goods-card"
            :thumb="item.goodsCoverImg"
          >
            <template #footer>
              <van-stepper
                v-model="item.goodsCount"
                min="1"
                max="5"
                :name="item.cartItemId"
                @change="numChange"
              />
            </template>
          </van-card>

          <template #right>
            <van-button
              square
              @click="deleteGoods(item.cartItemId)"
              text="删除"
              type="danger"
              class="delete-button"
            />
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>

    <van-submit-bar
      class="sub"
      :price="totalPrice * 100"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checkedAll" class="checkedAll" @click="allCheck">全选</van-checkbox>
    </van-submit-bar>


    <NavBar />
  </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import SimpleHeader from "../components/SimpleHeader.vue";
import { onMounted, ref ,computed} from "vue";
import { getCart, modifyCart, deleteCartItem } from "@/api/cart.js";
import { useStore } from "vuex";

const groupChange = () => {
  // 选中商品
  checkedAll.value = (result.value.length === list.value.length) && result.value.length>0 ? true : false;
  console.log(result.value);
};
const result = ref([]);

const numChange = async(value,detail) => {
  //修改数量,往后端发送请求，修改数量
  const params = {
    cartItemId: detail.name,
    goodsCount: value
  }
  await modifyCart(params);

};


const checkedAll = ref(false);

const allCheck = () => {
  if (!checkedAll.value) {//大家都不选择
    result.value = []
  }
  else {
    result.value = list.value.map((item) => item.cartItemId);
  }
}

const list = ref([]);
onMounted(async () => {
  const { data } = await getCart({ pageNumber: 1 });
  console.log(data);
  list.value = data;
  result.value = data.map((item) => item.cartItemId);
});

const store = useStore(); //仓库的实例对象
const deleteGoods = async (id) => {
  await deleteCartItem(id);
  store.dispatch("setcartCountAction");
  init()
}

const init = async() => {
  const { data } = await getCart({ pageNumber: 1 });
  console.log(data);
  list.value = data;
  result.value = data.map((item) => item.cartItemId);
}

const totalPrice = computed(() => { //当计算属性中的依赖变量有变动的时候，会重新计算
  let _list = list.value.filter((item) => result.value.includes(item.cartItemId))
  const allPrice = _list.reduce((pre,item,index,arr) => {
    return pre += item.sellingPrice * item.goodsCount
  }, 0)
  return allPrice;
})
</script>

<style lang="less" scoped>
.cart-body {
  margin: 16px 0 100px 0;
  padding-left: 10px;
}
.sub {
  bottom: 50px;
}
.checkedAll {
  width: 60px;
}
</style>
<style>
.van-swipe-cell__wrapper {
  display: flex;
}
.van-card.goods-card {
  width: 100%;
  background-color: #fff;
}
.van-checkbox {
  width: 23px;
}
.delete-button {
  height: 100%;
}
.van-card__footer {
  position: absolute;
  right: 16px;
  bottom: 8px;
}
.van-card__num {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
