// 怎么办？递归带来的内存问题
// 递归的有点是简单，同时性能不好
// 如果不往执行栈里面push函数，是不是就可以？
//有两种解决方法：
// 入栈过的函数没有必要再入栈，记忆法

    //             10
    //         9       8
    //     8      7   7    6
    //  7   6   6  5 6 5  5 4    

const f=[]; //全局变量 用来记忆函数输出的结果
const climbStairs=function(n){
    //退出条件
    if(n === 1) return 1;
    if(n === 2) return 2;
    if(f[n]===undefined){ // 第一次
        //函数嵌套函数就是递归
        f[n]=climbStairs(n-1)+climbStairs(n-2); // 递归公式
    }
    return f[n];
}
let n=100;

console.log(climbStairs(n));