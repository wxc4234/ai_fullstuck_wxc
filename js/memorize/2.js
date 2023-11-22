function add(a, b) {
  if (arguments.length != 2) {
    throw new Error('必须传递两个参数');
  }
  if(typeof a!='number'||typeof b!='number'){
    throw new Error('必须是整数');
  }
  return a + b;
}
// 记忆函数 百搭的 
function memorize(f) {
  if (typeof f !== 'function') return;
  var cache = {}; // 存储缓存数据的对象 空间换时间  不会被销毁的自由变量
  return function () {
    var key = arguments.length + Array.prototype.join.call(arguments, ',');
    // 在这个函数里面做add
    if (key in cache) {
      return cache[key];
    } else {
      // var res = f.apply(this, arguments);
      // cache[key] = res;
      // return res;
      return cache[key] = f.apply(this, arguments); //代码一般是从右往左执行
    }
  }
}
const memorizedAdd = memorize(add); // 有缓存功能的add memorize记忆函数
console.log(memorizedAdd(1, 2));
console.log(memorizedAdd(1, 2));