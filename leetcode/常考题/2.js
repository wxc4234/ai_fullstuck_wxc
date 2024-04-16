// 水仙花数

// 153 = 1^3 + 5^3 + 3^3

const isTrue = (num) => {
  let str = num.toString();
  const len = str.length;
  let sum = 0;
  for(let i = 0; i < len; i++) {
    sum += Math.pow(parseInt(str[i]), len);
  }
  return sum === num;
}

// console.log(isTrue(153));


// 找出规定位数的的水仙花数

const getAll = (num) => {
  let arr = [];
  for (let i = 10 ** (num - 1); i <= 10 ** num - 1; i++) { // 10 ** (num - 1) 10的num-1次方
    if (isTrue(i)) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(getAll(3));