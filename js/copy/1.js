// let a = 1
// let b = a
// a = 2
// console.log(b); //1

let a = {
  age:18
}
let b = a
// a.age = 19
a = {
  age:19
}
// console.log(b.age); //19
console.log(b.age);//18
