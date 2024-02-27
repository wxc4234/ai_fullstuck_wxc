// Object.prototype.abc = 123

let obj = {
  a: 1,
  b: 2
}
// // for (let key in obj) {
// //   console.log(key,obj[key]);
// // }

// console.log(obj.hasOwnProperty('a'));
// // 判断对象上是否显示具有某个属性
// // 实例对象的隐式原型是构造函数的显示原型

// let newObj = Object.assign({}, obj)
// console.log(newObj);

// Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

// let obj2 = Object.create(obj) // 创建一个新对象，新对象的隐式原型是obj
// console.log(obj2);
// Object.create() 方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。


let arr = [1, 2, 3]
let newArr = [].concat(arr)