import { createStore } from "./gvuex";

const store = createStore({
  // 不会污染组件对象 因为this是指向组件的 就比如this.data.count this.count 这样的话就会污染组件对象
  state() {
    return {
      count: 1,
      todos: []
    }
  },
  getters: {
    double(state) {
      return state.count * 2
    }
  },
  // mutations 就是用于同步修改 state，不支持异步操作，
  // 它的修改很严格的，状态的改变可以由mutations来记录的
  mutations: {
    add(state) {
      state.count++
    },
    addTodos(state, playload = []) {
      state.todos = [
        ...state.todos,
        ...playload
      ]
    }
  },
  actions: {
    fetchTodos: async ({ commit }) => {
      const todos = await getTodos();
      commit('addTodos', todos)
    },

    // UI组件 + 数据管理 API请求都在这里
    asyncAdd({ commit }) {
      setTimeout(() => {
       commit('add')
      },1000)
    },
    add({ commit }) {
      commit('add')
    }
  }
})

export default store