// for (let i = 0; i < 10; i++){

// }
// console.log(i);

var obj = {
  a: 1,
  foo: foo
}
function foo() {
  console.log(this.a);
}
obj.foo()