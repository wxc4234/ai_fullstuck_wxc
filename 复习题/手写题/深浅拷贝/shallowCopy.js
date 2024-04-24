let obj = {
  a: [1,2,[3,4]],
  b: {
    c: 2,
    d: 3
  }
}
// 1.简单的赋值实现，在对象的原型上有hasOwnProPerty方法
// function shallowCopy(obj) {
//   let newObj = {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       newObj[key] = obj[key]
//     }
//   }

//   return newObj;
// }

// let newObj = shallowCopy(obj)
// obj.a[1] = 3;

// console.log(newObj);


// 2.是object.assain实现
// function shallowCopy(obj) {
//   let newObj = {};
//   newObj = Object.assign({}, obj);
//   return newObj
// }

// let newObj = shallowCopy(obj);

// obj.a[1] = 3

// console.log(newObj);

// 3.可以通过解构的方式来实现，但是只能用来处理数组
// let arr = [1, 2, [3, 4, [5, 6]]];
// function shallowCopy(arr) {
//   let newArr = [];

//   newArr = [...arr]
//   return newArr
// }

// let newArr = shallowCopy(arr);

// arr[2][2][0] = 3

// console.log(newArr);

// 4.可以通过splice方法实现浅拷贝，但是也只能用于数组
// let arr = [1, 2, [3, 4, [5, 6]]];
// function shallowCopy(arr) {
//   let newArr = [];

//   newArr = arr.slice()
//   return newArr
// }

// let newArr = shallowCopy(arr);

// arr[2][2][0] = 3

// console.log(newArr);

// 5. 可以通过concat的方法来实现浅拷贝，但是也使适合用于数组
let arr = [1, 2, [3, 4, [5, 6]]];
function shallowCopy(arr) {
  let newArr = [];

  newArr = [].concat(arr)

  return newArr
}

let newArr = shallowCopy(arr);

arr[2][2][0] = 3

console.log(newArr);