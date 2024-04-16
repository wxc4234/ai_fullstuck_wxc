// 删除一个字母的回文

let a = 'abaas';

const validPaliond = (s) => {
  let left = 0;
  let right = s.length - 1;
  while(left < right) {
    if(s[left] !== s[right]) {
      return isPaliond(s.substring(left, right)) || isPaliond(s.substring(left + 1, right + 1));
    }
    left++;
    right--;
  }
  return true;
}

const isPaliond = (n) => {
  return n === n.split('').reverse().join('');
}

console.log(validPaliond(a));