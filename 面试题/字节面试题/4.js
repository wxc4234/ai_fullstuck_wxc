Object.prototype[Symbol.iterator] = function() {
  return Object.values(this)[Symbol.iterator]()
}


var [a, b] = {a: 1, b: 2};  // [1, 2]
console.log(a, b);



// iterable
// {
//   [Symbol.iterator]: function() {
//     return 迭代器 (可通过next()就能读取到值的对象)
//   }
// }


// arr[Symbol.iterator]


function* foo() {
  yield 1
  yield 2
  yield 3
  yield 4
}

let gen = foo()  // {} 迭代器

gen.next()