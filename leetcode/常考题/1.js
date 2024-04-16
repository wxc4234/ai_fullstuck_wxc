// 找出数组中最多的元素

function findMost(arr) {
  if (!arr.length) return;
  if (arr.length === 1) return arr[0];
  let res = arr[0];
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
    if (obj[arr[i]] > obj[res]) {
      res = arr[i];
    }
  }
  return res;
}

let lines = ['192.168.1.1', '192.168.1.2', '192.168.1.1','192.168.1.2','192.168.1.2'];
console.log(findMost(lines));
