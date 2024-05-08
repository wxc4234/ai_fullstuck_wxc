Function.prototype.myCall = function (obj, ...arg) {
  obj = obj || windows;
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

greet.myCall(person,[]);