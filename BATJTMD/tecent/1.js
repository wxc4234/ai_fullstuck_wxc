//函数要注意是什么？
//编写一个函数，返回一个美国座机格式的电话号码(123-4567-890)
// 输入是数字数组
// 不要急于写功能，先写注释
// 大厂代码的可读性比功能重要一个等级
// 不用读代码，看完注释能够直接拿来就用
//合作 
/**
 * @func 返回美国格式的座机号
 * @param {Array} nums [1234567890]
 * @return {String} (123)456-7890
 * @author wxc 2023/10/31
 */

// function creatPhoneNumber(nums){
//     return "("+nums[0]+nums[1]+nums[2]
//     +")"+nums[3]+nums[4]+nums[5]
//     +"-"+nums[6]+nums[7]+nums[8]+nums[9];

// }

// js里的函数还能怎么写？es6+语法
 // let createPhoneNumber // undefined 类型未定义 let 声明了undifined的变量
// 箭头函数 可以省略function 代码体只有返回值可以省略return
const createPhoneNumber=(nums) => { // 函数表达式来定义一个函数
    return "("+nums[0]+nums[1]+nums[2]
    +")"+nums[3]+nums[4]+nums[5]
    +"-"+nums[6]+nums[7]+nums[8]+nums[9];
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));
