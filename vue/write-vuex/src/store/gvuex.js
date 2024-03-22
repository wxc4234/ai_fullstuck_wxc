import { reactive, computed, inject } from 'vue'

const STORE_KEY = '__store__'
// 为了在组件中使用store

function useStore() {
  return inject(STORE_KEY)
}

class Store{
  constructor(options) {
    this.$options = options //引用式拷贝 原来的对象 $可以实现一个特别的,为了拿到最初的状态
    // state变成reactive
    // 添加了一个私有对象
    this._state = reactive({
      data: options.state()
    })
    this._mutations = options.mutations
    this._actions = options.actions
    this._getters = {}
    Object.keys(options.getters).forEach(name => {
      const fn = options.getters[name]
      this._getters[name] = computed(() => fn(this.state))
    })

  }
  // 提升了它的易用性
  get state() {
    //使用get是为了让state是只读的，因为state是响应式的，如果直接修改state的话会报错
    // 为它的返回提供一个业务逻辑，这样就可以实现只读的状态
    return this._state.data
  }
  // 严谨的状态修改
  commit = (type, payload) => {
    const entry = this._mutations[type];
    return entry && entry(this.state, payload);
    // 这里的this是store实例，所以可以直接调用，this中有state，mutations，actions
  }

  dispatch = (type, payload) => {
    const entry = this._actions[type];
    return entry && entry(this, payload);
  }

  install(app) {
    console.log('/////');
    app.provide(STORE_KEY, this)
  }
}
const createStore = (options) => {
  // 完成实例化
  return new Store(options)
}


export { createStore, useStore }