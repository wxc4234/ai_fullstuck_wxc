import { createStore } from 'vuex'

const state = {}
const mutations = {}
const actions = {}
const modules = {}

// createStore会返回一个store单例 单一状态数 -> 分支 store.state.cart.items
export default createStore({
  state,
  mutations,
  actions,
  modules
})