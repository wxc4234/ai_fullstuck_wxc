function bubbleSort(arr) {
  console.time('改进冒泡排序');
  const len = arr.length;
  if (len <= 1) return;
  // 提前排好了
  for (let i = 0; i < len - 1; i++) {
    let isSorted = true; // 提前退出冒泡循环的标志位
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSorted = false; // 有数据交换
      }
    }
    if (isSorted) break;
  }
  console.timeEnd('改进冒泡排序')
  return arr;
}
const arr = [5, 8, 6, 3, 9, 2, 1, 7];
bubbleSort(arr);
// console.log(arr);