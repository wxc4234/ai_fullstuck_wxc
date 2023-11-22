let count = 0;
var fibonacci = function (n) {
  count++;
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2); // ?是三元运算符
}

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
console.time("fibonacci");
fibonacci = memorize(fibonacci);
console.log(fibonacci(1000), count);
console.timeEnd("fibonacci");

// 优化 动态规划
// function fibonacci(n) {
//   let fib = [0, 1];
//   for(let i = 2; i <= n; i++) {
//       fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib[n];
// }

