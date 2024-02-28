// function add(a, b, c) {
//   return a + b + c;
// }

// 如何实现一个柯里化函数，使得add(1)(2)(3)返回6？


// function add(a) {
//   return function(b) {
//     return function(c) {
//       return a + b + c;
//     }
//   }
// }

// add(1)(2)(3); // 6