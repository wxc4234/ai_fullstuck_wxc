var array=[1,1,'1','1']
/*
* @func uniq 数组去重
* @param {Array} arr
* @return {Array} result 去重后的数组
* @auther wxc 2023/11/20
*/
// function uniq(arr){
//   var res=[]
//   // 暴力破解法
//   // 两重for循环，外层循环arr，内层循环res，arr的当前项如果不在res中，就push到res中，否则跳过
//   // 为什么要使用arrLength = arr.length，
//   // arr.length 堆内存中的值，每次循环都要计算一次，浪费性能，因此用一个变量缓存
//   // arrLength = arr.length，把arr.length的值赋值给arrLength，arrLength就是一个变量，不需要每次循环都计算
//   // 性能优化
//   for(var i=0 , arrLen = arr.length; i<arrLen; i++){
//     for(var j=0 , resLen = res.length; j<resLen; j++){
//       if(arr[i]===res[j]){ // 恒等
//         break;
//       }
//     }
//     // 如果arr[i]是唯一的，那么执行完循环，j等于res.length
//     if(j === resLen){
//       res.push(arr[i])
//     }
//   }
//   return res
// }
// function uniq(arr){
//   var res = [];
//   for(var i = 0, arrLen = arr.length; i < arrLen; i++){
//     var current = arr[i];//变量名的意义
//     // 数组是连续的存储空间，arr[0]起始位置，0+i*item = i的位置
//     if(res.indexOf(current) === -1){//下标>=0 存在
//       res.push(current)上
//     }
//   }
//   return res;
// }

// 使用sort方法
// function uniq(arr) {
//   var res = [];
//   // 先排序，再解决
//   // concat() 方法用于连接两个或多个数组。
//   var sortedArr = arr.concat().sort();
// 为什么用concat()，因为sort()会改变原数组，concat()不会改变原数组
//   var seen; //存储着前一项的值
//   for (var i = 0, Len = sortedArr.length; i < Len; i++) {
//     // 如果是第一个元素或者相邻的元素不相同
//     if (!i || seen !== sortedArr[i]) {
//       res.push(sortedArr[i]);
//     }
//     seen = sortedArr[i];
//   }
//   return res;
// }

// 适用于所有场景
function uniq(arr,isSorted) {
  var res = [];
  var seen;
  for (var i = 0, len = arr.length; i < len; i++){
    var val = arr[i]; // 当前项的值
    if (!isSorted) {
      // 如果是第一个元素或者相邻的元素不相同
      if (!i || seen !== val) {
        res.push(val);
      }
      seen = val;
    }else if(res.indexOf(val) === -1){ // 已经排序过的数组，如果当前项在res中不存在，就push到res中
      res.push(val);
    }
  }
  return res;
}

// 怎么让外界访问到uniq方法呢？
// 要输出结果，就要用到module.exports 
// module 就是当前模块一个uniq模块，exports就是模块的输出对象,uniq就是输出对象的一个方法
module.exports = uniq