// 手写bind args 收集了所有的参数 rest运算符(收集运算符)
Function.prototype.myBind = function (context, ...args) {
  // this -> context
  // this -> fn
  if (typeof this !== 'function') {//校验this是否为函数
    throw new Error('error')
  }
  context = context || window;// 如果没有传入context，默认为window
  const that = this;// 保存this,不改变this指向
  return function fn(...innerArgs) {
    // this被context覆盖
    return that.apply(context,[...args,...innerArgs]);// apply的第二个参数是数组
  }
}
let obj = {
  name: 'wxc'

}
const bindedFN = func.myBind(obj, 1, 2, 3);
console.log(bindedFN(4, 5, 6));