
Object.prototype.abc = 123
function shallowCopy(obj) {
  let newObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];

    }
  }
  return newObj;
}
let obj = {
  a: [1,2,[3,4]],
  b: {
    c: 2,
    d: 3
  }
}
let obj2 = shallowCopy(obj);
obj.b.c = 4;
console.log(obj2);


// function deepCopy(obj) {
//   let obj2 = {};
//   for (let i in obj) {
//     if (obj[i] instanceof Array) {
//       obj2[i] = [];
//       for (let j = 0; j < obj[i].length; j++) {
//         obj2[i][j] = obj[i][j];
//       }
//     }else if (typeof obj[i] === 'object') {
//       obj2[i] = deepCopy(obj[i]);
//     } else {
//       obj2[i] = obj[i];
//     }
//   }
//   return obj2;
// }
// let obj = {
//   a: [1,2,[3,4]],
//   b: {
//     c: 2
//   }
// }
// let obj2 = deepCopy(obj);
// // obj.b.c = 4;
// console.log(obj2);