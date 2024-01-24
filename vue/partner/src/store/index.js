import { createStore } from 'vuex';

// 构建一个仓库收集数据，用于组件之间的数据共享
const store = createStore({
  state: {
    sex: '女',
    age: '',
    address: '',
  },
  mutations: {
    getSex(state, value) {
      state.sex = value;
    },
    getAge(state, value) {
      state.age = value;
    },
    getAddress(state, value) {
      state.address = value;
    },
  },
  actions: {
    updateSex(context, value) {
      context.commit('getSex', value);
    },
    getAgeAction(context, value) {
      context.commit('getAge', value);
    },
    getAddressAction(context, value) {
      context.commit('getAddress', value);
    },
  },
  getters: {
    //  添加一个getter,用于获取state中的sex数据
    putSex: state => state.sex,
    getAgeGetter: state => state.age,
    getAddressGetter: state => state.address
  }
})

export default store;