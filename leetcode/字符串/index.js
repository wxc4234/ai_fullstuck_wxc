let str='hello'

// 将字符串反转
// let str1=str.split('').reverse().join('')
// let str2=''
// for(let i=str.length-1;i>=0;i--){
//     str2+=str[i]
// }

const arr =str.split('')
arr.reverse()
console.log(arr.join(''));