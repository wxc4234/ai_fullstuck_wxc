// let arr = [2, 4, 5, 1, 3]
// 数组自带的sort方法
// arr.sort((a, b) => {
//   return a - b
// })
// console.log(arr);// [1, 2, 3, 4, 5]
// // sort会改变原数组
let arr = [2, 4, 5, 1, 3]
// function bubbleSort(arr) {// 冒泡排序
//   const res = []
//   while (arr.length) {
//     let min = Math.min(...arr)// 找到最小值
//     res.push(min)
//     let index = arr.indexOf(min)// 找到最小值的索引,并删除,继续循环,直到arr为空
//     arr.splice(index,1)
//   }
//   return res
  function bubbleSort(arr) {// 冒泡排序
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}
console.log(bubbleSort(arr));// [1, 2, 3, 4, 5]