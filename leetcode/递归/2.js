//5!
function mul(n){

    // let res = 1
    // for(let i = 1; i <= n; i++){
    //     res *= i
    // }
    // return res

    // 递归实现
    if(n === 1) return 1
    return n * mul(n - 1)
  }
// 递归特点
// 1.找规律
// 2.找出口
console.log(mul(5)); //120