import { createStore } from 'vuex';

const store = createStore({
  state() { //data数据源 公共的数据源
    return {
      lists: ['html','css','js']
    }
  },
  mutations: { //相当于methods
    addLists(state,msg) { //mutations中定义的方法天生具有一个形参，代表state数据源
      state.lists.push(msg)
}
  }
});

export default store;
