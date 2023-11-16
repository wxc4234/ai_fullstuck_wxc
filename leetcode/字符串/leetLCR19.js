let s='abca'
// 最多删除一位字符，判断是否能成为回文字符串

// 思路：双指针，从两边向中间遍历，如果遇到不相等的字符，就分别删除左右两边的字符，判断剩下的字符串是否是回文字符串

// function isPalindrome(str){
//     let left=0
//     let right=str.length-1
//     while(left<right){
//         if(str[left]!=str[right]){
//             return isPalindrome2(str,left+1,right)||isPalindrome2(str,left,right-1)
//         }
//         left++
//         right--
//     }
//     return true
// }
// function isPalindrome2(str,left,right){
//     while(left<right){
//         if(str[left]!=str[right]){
//             return false
//         }
//         left++
//         right--
//     }
//     return true
// }

var validPalindrome = function(s) {
  let i = 0, j = s.length - 1

  while (i < j && s[i] === s[j]) {
    i++
    j--
  }

  if (isPalindrome(i+1, j)) {
    return true
  }

  if (isPalindrome(i, j-1)) {
    return true
  }

  function isPalindrome(st, ed) {
    while (st < ed) {
      if (s[st] !== s[ed]) {
        return false
      }
      st++
      ed--
    }
    return true
  }

  return false
};

console.log(validPalindrome(s));
  