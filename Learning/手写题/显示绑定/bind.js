Function.prototype.myBind = function (obj,...arg) {
  const fn = this;
  return function (...args) {
    fn.apply(obj, arg.concat(...args))
  }
}

function greet() {
  console.log(`Hello, ${this.name}!`);
}

const person = {
  name: 'Alice'
};

const boundFn = greet.myBind(person);
boundFn();