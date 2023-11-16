let str='yessey'
function isPalindrome(str){
    // let arr=str.split('')
    // arr.reverse()
    // return arr.join('')==str
    let left=0
    let right=str.length-1
    while(left<right){
        if(str[left]!=str[right]){
            return false
        }
        left++
        right--
    }
    return true
}
console.log(isPalindrome(str));