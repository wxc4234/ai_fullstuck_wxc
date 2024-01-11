import { createStore } from "vuex";
import { getCart } from "@/api/cart";

const store = createStore({
  state() {
    //全局公共的数据源 等同于data的概念
    return {
      cartCount: 1,
    };
  },
  mutations: {
    //等同于methods 专职修改state
    //修改state的值
    setcratCount(state, count) {
      state.cartCount = count;
    },
  },
  actions: {
    //等同于methods,但是actions中可以写异步的操作 调用mutations中的方法
    // setcratCount()
    async setcartCountAction(ctx) {
      //ctx==仓库里面的实例
      const { data } = await getCart();
      console.log(data);
      ctx.commit("setcratCount", data.length);
    },
  },
  getters: {
    //等同于computed
    //获取state中的值
  },
});

export default store;
