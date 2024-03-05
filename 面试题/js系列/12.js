
Persion.prototype.getName = function () {
  return this.name
}
function Persion(name) {
  this.name = name
}
// let p = new Persion('Tom')

let p = myNew(Persion, 'Tom');

function myNew(...args) {
  let obj = {};
  obj.__proto__ = args[0].prototype;
  const res = args[0].call(obj, ...args.slice(1));
  return (typeof res === 'object' && res !== null) ? res : obj;
}

console.log(p.name);
console.log(p.getName());