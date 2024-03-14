let obj = {
  a: 1,
  b: 2,
}

Object.defineProperty(obj, 'a', { //数据劫持
  get() {

  },
  // set(newVal) {

  // },
  enumerable: true, //当前对象是否可枚举
  writable: true, //当前对象是否可写
  // value: 100 ,//设置默认值
  configurable: true //当前对象是否可配置 (删除，修改)
})

obj.a = 10
console.log(obj.a)