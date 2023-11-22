// 两数相加
function add(arr1, arr2) {
  console.log(Array.prototype.join.call(arguments,'-')); // 
  // console.log([...arguments]); // 展开运算符，把类数组转化成数组

  // const arr = Array.from(arguments); // 把类数组转化成数组
  // console.log(Object.prototype.toString.call(arr));

  // 参数数量？ this arguments
  // console.log(arr1, arr2, arguments[0], arguments[1]);
  // console.log(typeof arguments,Object.prototype.toString.call(arguments));
  // console.log(arguments.join('--'));
  if (arguments.length != 2) {
    throw new Error('必须传递两个参数') // 抛出错误
  }
  return arr1 + arr2;
}


try {
  console.log(add(1,2));
} catch (e) {
  console.log(e);
}
console.log('continue...');
// var arr1 = 1;
// var arr2 = 2;
// console.log(add(arr1, arr2));