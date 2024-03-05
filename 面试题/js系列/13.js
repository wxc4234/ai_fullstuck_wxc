var obj = {
  name: 'Tom'
}
function foo(x,y) {
  console.log(this.name, x, y)
  return 'hello'
}

Function.prototype.myCall = function () {
  // 让obj调用foo，触发隐式绑定
  // arguments[0] [...arguments].slice(1)
  let obj = arguments[0] ? arguments[0] : window;
  let args = [...arguments].slice(1)
  let key = Symbol('key');
  obj[key] = this;
  let res = obj[key](...args);
  obj[key](...args);
  delete obj[key];
  return res;

}

foo.myCall(obj, 1, 2)