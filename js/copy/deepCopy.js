let obj = {
  name: 'wxc',
  age: 18,
  a: {
    n: 1
  },
  b: undefined,
  c: null,
  d: function () { },
  e: Symbol('hello'),
  f: {
    n: 100
  }
}
function deepCopy(obj) {
  let objCopy = {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      //区分obj[key]是原始类型或者引用类型
      if (obj[key] instanceof Object) {// 不能直接赋值
        objCopy[key] = deepCopy(obj[key]) // 递归调用 
      } else {
        objCopy[key] = obj[key]
      }
    }
  }
  return objCopy
}
let obj2 = deepCopy(obj)
obj.age = 20;
console.log(obj2);