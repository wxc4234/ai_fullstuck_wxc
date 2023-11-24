// let a = {
//   name: 'wxc'
// }
// let b = Object.create(a) //隐式继承 浅拷贝
// a.name = 'wxc1'
// console.log(b.name); //wxc1


// Object.assign()拼接对象 浅拷贝
// Object.assign(a,b) //a对象拼接b对象 a对象会被修改
// Object.assign({},a,b) //将b放到a里面，再将a放到{}里面，a不会被修改
// let a = {
//   name: 'wxc',
//   like: {
//     n: 'coding'
    
//   }
// }
// let b = Object.assign({}, a)
// // a.name = 'wxc1'
// a.like.n = 'music'
// console.log(b.like.n); //music 浅拷贝，拷贝了like对象的引用地址，所以b.like.n也会被修改
// // console.log(b.name); //wxc


let arr = [1, 2, 3,{n: 10}]
// let newArr = [].concat(arr) //浅拷贝
// arr.push(4)
// arr[3].n = 100
// console.log(newArr);

// let newArr = [...arr] //浅拷贝

let newArr=arr.toReversed().reserse() 
arr[3].n = 100
console.log(newArr);