// 数组的右边，是已经排好序的，出现不需要比较j-i-1的情况
// 标记上一轮，完成交换的位置，下一轮，只需要比较到这个位置即可
const bubbleSort = (arr) => {
  console.time('bubbleSort');
  let temp = 0;
  let lastExchangeIndex = 0;
  let sortBorder = arr.length - 1;
  let len=arr.length
  for (let i = 0; i < len; i++){
    let isSorted = true;
    for (let j = 0; j < sortBorder; j++){
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSorted = false;
        lastExchangeIndex = j;
      }
    }
    sortBorder=lastExchangeIndex;
    if (isSorted) break;
  }
  console.timeEnd('bubbleSort');
  return arr;
}
