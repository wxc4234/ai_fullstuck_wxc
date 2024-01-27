import { createStore } from 'vuex';

// 构建一个仓库收集数据，用于组件之间的数据共享
const store = createStore({
  state: {
    sex: '',
    age: '',
    address: '',
    currentPage: 'Home',
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
    setCurrentPage(state, page) {
      state.currentPage = page;
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
    updateCurrentPage(context, page) {
      context.commit('setCurrentPage', page);
    },
  },
  getters: {
    //  添加一个getter,用于获取state中的sex数据
    putSex: state => state.sex,
    getAgeGetter: state => state.age,
    getAddressGetter: state => state.address,
    getCurrentPage: (state) => state.currentPage,
  }
})

export default store;