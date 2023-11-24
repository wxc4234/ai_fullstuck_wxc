// 编写一个浅拷贝方法
let obj = {
  name: 'wxc',
  age: 21,
  like: {
    n: 'coding'
  }
}
function shallowCopy(obj) {
  // 不是引用类型就不拷贝
  if(typeof obj !== 'object' || obj === null) return

  // 如果形参obj是数组，就创建一个新数组，如果是对象，就创建一个新对象
  // if (Array.isArray(obj)) {
  //   let objCopy = []
  // } else {
  //   let objCopy = {}
  // }
  let objCopy = obj instanceof Array ? [] : {} 
  // obj instanceof Array ? [] : {} 是一个条件（三元）运算符，
  // 它会检查 obj 是否是一个数组。如果 obj 是一个数组，那么就创建一个新的空数组[]，否则创建一个新的空对象 { }。

  // 遍历obj，将obj的属性赋值给objCopy
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = obj[key]
      // 如果是数组 onjCopy[0]=obj[0]
      // 如果是对象 objCopy.name=obj.name
    }
  }
  return objCopy
}
let newObj = shallowCopy(obj)