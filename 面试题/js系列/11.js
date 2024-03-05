// var name = 'Tom'
// var obj = {
//   name: 'John'
// }

// function foo() {
//   console.log(this.name);
// }

// function bar() {
//   var name = 'Jerry'
//   foo()
// }

// function baz() {
//   bar()
// }

// baz.call(obj)


// var name = 'Tom'
// var obj = {
//   name: 'John',
//   foo: foo
// }
// var obj2 = {
//   name: 'Tom',
//   obj: obj
// }
// function foo() {
//   console.log(this.name);
// }
// obj2.obj.foo()


// var obj = {
//   name: 'John',
//   foo: foo
// }

// function foo() {
//   console.log(this.name);
// }

// // foo.call(obj)
// // foo.apply(obj)
// let bar = foo.bind(obj)
// bar()


var name = 'Tom'
function foo() {
  var name = 'John'
  const bar = () => {
    console.log(this.name);
  }
  bar()
}
foo()