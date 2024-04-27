// Function.prototype.myApply = function (obj,arg) {
//   obj = obj || window;
//   const key = Symbol('key');
//   obj[key] = this;
//   const result = obj[key](...arg);
//   delete obj[key];
//   return result;
// }

Function.prototype.myApply = function (obj, arg) {
  obj = obj || window;
  const key = Symbol('key');
  obj[key] = this;
  const result = obj[key](...arg);
  delete obj[key];
  return result;
}

function greet() {
  console.log(`Hello, ${this.name}!`);
}

const person = {
  name: 'Alice'
};

greet.myApply(person,[]);