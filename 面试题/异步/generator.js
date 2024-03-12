// function* foo() {
//   yield 'a';
// }

// let gen = foo(); // 得到一个指向内部状态的指针对象

// console.log(gen.next()); // { value: 'a', done: false }
// console.log(gen.next()); // { value: undefined, done: true }


// function* foo() {
//   var o = 1;
//   yield o++;
//   yield o++;
//   yield o++;
// }

// var gen = foo();
// console.log(gen.next());


function* foo() {
  var o = 1;
  var a = yield o++;
  console.log(a);
  var b = yield o++;
  console.log(b);
}

let gen = foo();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());