let obj = {
  a: [1,2,[3,4]],
  b: {
    c: 2
  }
}

// 1. 可以使用递归的方法实现深拷贝
// function deepCopy(obj) {
//   let newObj = {};
//   for (let key in obj) {
//     if (obj[key] instanceof Array) {
//       newObj[key] = [];
//       for (let j = 0; j < obj[key].length; j++){
//         newObj[key][j] = obj[key][j];
//       }
//     } else if (typeof obj[key] === 'object') {
//       newObj[key] = deepCopy(obj[key]);
//     } else {
//       newObj[key] = obj[key];
//     }
//   }

//   return newObj;
// }

// 2.可以通过Json.parse(Json.stringify())实现
// function deepCopy(obj) {
//   let newObj = {};

//   newObj = JSON.parse(JSON.stringify(obj));

//   return newObj;
// }

// 3.可以通过MessageChannel实现

// function deepCopy(obj) {
//   return new Promise((resolve)=> {
//     let { port1, port2 } = new MessageChannel();
//     port1.postMessage(obj);
//     port2.onmessage = (msg) => {
//       resolve(msg.data)
//     }
//   })
// }

// let newObj = null;
// deepCopy(obj).then((res) => {
//   newObj = res;
//   obj.b.c = 3;
//   console.log(newObj);
// })

// obj.b.c = 3;
// console.log(newObj);

// 6.可以通过structuredClone来实现

function deepCopy(obj) {
  let newObj = {};
  newObj = structuredClone(obj);
  return newObj
}

let newObj = {};
newObj = deepCopy(obj);

obj.b.c = 3;

console.log(newObj);