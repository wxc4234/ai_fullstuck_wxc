import { reactive, computed } from 'vue'
class Store{
  constructor(options) {
    this.$options = options //引用式拷贝 原来的对象 $可以实现一个特别的,为了拿到最初的状态
    // state变成reactive
    // 添加了一个私有对象
    this._state = reactive({
      data: options.state()
    })
  }
  // 提升了它的易用性
  get state() {
    //使用get是为了让state是只读的，因为state是响应式的，如果直接修改state的话会报错
    // 为它的返回提供一个业务逻辑，这样就可以实现只读的状态
    return this._state.data
  }
}
const createStore = (options) => {
  // 完成实例化
  return new Store(options)
}


export { createStore }