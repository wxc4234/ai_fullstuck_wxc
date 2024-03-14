let obj = {
  a: 1,
  b: undefined,
  c: {
    n: 2,
  }
}

Object.defineProperty(obj, 'd', {
  enumerable: false,
  value: 3,
  writable: true,
  configurable: true
})

function hasProperty(obj, key) {
  // return obj[key] !== undefined // 值为undefined的属性就判断不了
  // return Object.keys(obj).includes(key) // 属性不可枚举的也判断不了
  // return obj.hasOwnProperty(key) // 不可以判断隐式具有的属性
  return key in obj // 可以判断所有属性

}

console.log(hasProperty(obj, 'toString')); // false 因为toString是隐式具有的属性