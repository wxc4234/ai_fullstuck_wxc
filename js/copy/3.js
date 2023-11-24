// let obj = {
//   name: 'wxc',
//   age: 18,
//   a: {
//     n: 1
//   }
// }

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

// console.log(JSON.stringify(obj)); // {"name":"wxc","age":18} 将对象转换为字符串
// let str = JSON.stringify(obj);
// console.log(JSON.parse(str)); // 将字符串转换为对象

let obj2 = JSON.parse(JSON.stringify(obj)); // 深拷贝
obj.age = 20;
obj.a.n = 2

console.log(obj2); // { name: 'wxc', age: 18, a: { n: 1 } }