// var obj={}
// obj.a=1

// var num=123 === new Number(123) 
// num.a='hello'

// console.log(num.a); //undefined

// var num=new Number(123) //Number对象
// //String() Number() Boolean() Object() Function() Array() Date() RegExp() Error() 内部函数
// num.a='hello'
// delete num.a
// console.log(num.a);

// var num=4
// num.len=3
// //  == new Number(4).len=3
// // == delete new Number(4).len

// console.log(num.len);

// 考点
// var arr=[1,2,3,4]
// arr.length=2
// console.log(arr); //[1,2]

// var str='abcd' // 字符串身上没有length属性
// str.length=2
// // new String('abcd').length=2
// // delete new String('abcd').length
// console.log(str.length); //4
// // new String('abcd').length 
// // length是对象身上的属性

