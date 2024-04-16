let a = 123;

function reverseNum(num) {
  // const stack = [];
  // const str = num.toString();
  // for (let i = 0; i < str.length; i++){
  //   stack.push(str[i]);
  // }
  // let res = '';
  // while(stack.length) {
  //   res += stack.pop();
  // }
  // return parseInt(res);

  return +(num.toString().split('').reverse().join(''));
}

console.log(reverseNum(a)); // 321