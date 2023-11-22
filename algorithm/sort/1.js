function bubbleSort(arr) {
  let len = arr.length; // 缓存数组长度
  for(let i = 0; i < len; i++) {
      for(let j = 0; j < len - i - 1; j++) { //本轮最大值到最右边，j<len-i-1：之前已经排号了的不用再排
      if(arr[j] > arr[j+1]) { // 相邻元素两两对比,交换位置
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
      }
  }
  return arr;
}
// 待排序 从小到大排序
const arr = [5, 8, 6, 3, 9, 2, 1, 7];
bubbleSort(arr);
