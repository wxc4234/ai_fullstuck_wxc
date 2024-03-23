// let arr = [2, 4, 5, 1, 3]

// 找出(选择)原数组中的最小值，方舟当前数组的最前方

// function selectSort(arr) { //收缩区间
//   const len = arr.length
//   let minIndex;
//   for (let i = 0; i < len; i++){
//     minIndex = i
//     for (let j = i; j < len;j++){//找最小值
//       if(arr[minIndex]>arr[j]){
//         minIndex = j
//       }
//     }
//     // 交换位置
//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
//   }
//   return arr
// }
// console.log(selectSort(arr));// [1, 2, 3, 4, 5]

let arr = [2, 4, 5, 1, 3]
// 双指针
function selectSort(arr) {
  let i = 0, j = arr.length - 1;
  while (i<j) {
    let minIndex = between(i, j);
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    i++;
  }
  function between(left,right) {
    // 返回左右区间中的最小值
    let minIndex = left;
    for (let i = left; i <= right; i++) {
      if (arr[minIndex] > arr[i]) {
        minIndex = i;
      }
    }
    return minIndex;
  }
  return arr
}
console.log(selectSort(arr));