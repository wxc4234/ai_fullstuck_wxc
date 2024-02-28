// function foo() {
//   let a = 1;
//   let b = 2;
//   function bar() {
//     console.log(this);
//     console.log(a);
//   }
//   return bar;
// }
// let baz = foo();
// baz();


let count = 0;
function foo() {
  count++;
}
function bar() {
  count--;
}
