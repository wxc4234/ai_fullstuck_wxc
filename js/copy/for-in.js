// let obj = {
//   name: 'wxc',
//   age: 21,
//   like: {
//     n: 'coding'
//   }
// }


// let o = Object.create(obj)
// o.sex = '男'
// // console.log(o);
// for (let key in o) {
//   if (o.hasOwnProperty(key)){ //判断是否是自身属性
//     console.log(key);
//   }
//   // console.log(key);
// }

let arr = [1, 2, 3, 4, 5]

for(let i in arr) {
  console.log(i, arr[i]);
}