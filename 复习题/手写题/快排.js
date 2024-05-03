// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const pivot = arr[Math.floor(arr.length / 2)]; // 选择一个基准元素
//   const left = [];
//   const right = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]); // 将小于基准的元素放入左侧数组
//     } else if (arr[i] > pivot) {
//       right.push(arr[i]); // 将大于基准的元素放入右侧数组
//     }
//   }

//   return [...quickSort(left), pivot, ...quickSort(right)]; // 递归地对左右子数组进行快速排序，并连接基准元素
// }


// function quickSort(arr) {
//   if (arr.length <= 1) return arr;
//   let left = [];
//   let right = [];
//   let middleValue = [];
//   let middleIndex = Math.floor(arr.length / 2);
//   let middle = arr[middleIndex]

//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] < middle) {
//       left.push(arr[i]);
//     } else if(arr[i]>middle) {
//       right.push(arr[i]);
//     } else {
//       middleValue.push(arr[i])
//     }
//   }

//   return [...quickSort(left), ...middleValue, ...quickSort(right)];
// }


function quickSort(arr) {
  if (arr.length < 1) return arr;
  let had = [];
  let left = [];
  let right = [];
  let middleIndex = Math.floor(arr.length / 2);
  let middle = arr[middleIndex];

  for (let i = 0; i < arr.length; i++){
    if (arr[i] < middle) {
      left.push(arr[i]);
    } else if(arr[i]>middle) {
      right.push(arr[i])
    } else {
      had.push(arr[i])
    }
  }

  return [...quickSort(left),...had,...quickSort(right)]
}

// 示例用法
const arr = [8, 3, 1, 5, 2, 2,9, 4, 7,7, 6];
console.log(quickSort(arr)); // 输出 [1, 2, 3, 4, 5, 6, 7, 8, 9]
