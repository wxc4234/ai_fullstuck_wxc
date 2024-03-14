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
  obj[key](...args); // 会触发隐式绑定, this指向obj, 执行foo函数
  delete obj[key];
  return res;

}

foo.myCall(obj, 1, 2)

// 如果如果是打造一个apply方法，只需要将args改为数组即可