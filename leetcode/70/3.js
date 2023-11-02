// 不用递归，使用for循环遍历
const climbStairs=function(n){
    // 自底向上 递推 dp 动态规划
    const f=[]; // 记忆优化
    f[1]=1;
    f[2]=2;
    for(let i=3;i<=n;i++){
        f[i]=f[i-1]+f[i-2];
    }
    return f[n];
}

let n=100;

console.log(climbStairs(n));