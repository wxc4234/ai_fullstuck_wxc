// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// // const arr2 = [1, 2, 3]

// // // const arr2 = arr.splice(3, 0, 'M')
// // // const arr2 = arr.splice(0, 2)

// // // const arr2 = arr.slice(0, 2)


// // const arr3 = arr.concat(arr2)

// // const arr4 = arr.find((item, index, arr) => {
// //   return item > 5
// // })

// const  arr5 = arr.every((item, i, arr) => {
//   return item > 5
// })
// console.log(arr5);

let arr1 = [1, 2];
let arr2 = [3, 4];

// push：
arr1.push(3);
console.log(arr1); // 输出: [1, 2, 3]

// unshift：
arr2.unshift(0);
console.log(arr2); // 输出: [0, 3, 4]

// splice：
arr1.splice(1, 0, 'a', 'b');    // 从索引1开始插入两个元素 ，1表示索引，0表示删除的元素个数, 'a', 'b'表示插入的元素
console.log(arr1); // 输出: [1, 'a', 'b', 2, 3]

// concat：
let newArr = arr1.concat(arr2);
console.log(newArr); // 输出: [1, 'a', 'b', 2, 3, 0, 3, 4]

let arr3 = [1, 2, 3, 4, 5];

// pop：删除并返回数组最后一个元素
let lastElement = arr3.pop();
console.log(lastElement); // 输出: 5
console.log(arr3); // 输出: [1, 2, 3, 4]

// shift：删除并返回数组的第一个元素
let firstElement = arr3.shift();
console.log(firstElement); // 输出: 1
console.log(arr3); // 输出: [2, 3, 4]

// splice：删除元素
arr3.splice(1, 2);
console.log(arr3); // 输出: [2, 4]

// slice：返回数组的一部分
let slicedArr = arr3.slice(1);
console.log(slicedArr); // 输出: [4]


let arr4 = [3, 1, 2];

// reverse：颠倒数组中元素的顺序
arr4.reverse();
console.log(arr4); // 输出: [2, 1, 3]

// sort：按照升序排序数组
arr4.sort();
console.log(arr4); // 输出: [1, 2, 3]

let arr5 = [1, 2, 3, 4, 5];

// indexOf：返回指定元素在数组中第一次出现的索引，不存在返回-1
let index = arr5.indexOf(3);
console.log(index); // 输出: 2

// includes：检查数组是否包含指定元素，返回布尔值
let isIncluded = arr5.includes(6);
console.log(isIncluded); // 输出: false

// lastIndexOf：返回指定元素在数组中最后一次出现的索引，不存在返回-1
let lastIndex = arr5.lastIndexOf(3);
console.log(lastIndex); // 输出: 2

// find：返回数组中满足提供的测试函数的第一个元素的值，如果找不到则返回 undefined
let foundElement = arr5.find(item => item > 3);
console.log(foundElement); // 输出: 4


let arr6 = ['Hello', 'World'];

// join：将数组中的所有元素连接成一个字符串
let str = arr6.join(' ');
console.log(str); // 输出: "Hello World"


let arr7 = [1, 2, 3, 4, 5];

// forEach：对数组中的每个元素执行指定的函数
arr7.forEach(item => {
    console.log(item * 2); // 输出: 2, 4, 6, 8, 10
});

// map：对数组中的每个元素执行指定的函数，并返回一个新数组
let newArr7 = arr7.map(item => item * 2);
console.log(newArr7); // 输出: [2, 4, 6, 8, 10]

// filter：返回满足指定条件的所有元素组成的新数组
let filteredArr = arr7.filter(item => item % 2 === 0);
console.log(filteredArr); // 输出: [2, 4]

// some：检测数组中是否有至少一个元素满足指定条件，返回布尔值
let isSome = arr7.some(item => item > 3);
console.log(isSome); // 输出: true

// every：检测数组中是否所有元素都满足指定条件，返回布尔值
let isEvery = arr7.every(item => item > 3);
console.log(isEvery); // 输出: false

let arrayLike = { 0: 'a', 1: 'b', length: 2 };
let newArr8 = Array.from(arrayLike);
console.log(newArr8); // 输出: ['a', 'b']

// Array.of()：根据传入的参数创建一个新数组
let newArr9 = Array.of(1, 2, 3);
console.log(newArr9); // 输出: [1, 2, 3]