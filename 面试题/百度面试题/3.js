const obj1 = { a: 1 }
const obj2 = { b: 2 }

console.log(obj1 == obj2); //两个都是对象，则类型转换统一往原始类型转换，转换为数字，再比较，这里是值相等，但是引用地址不同，所以是false
console.log(obj1 === obj2);//两个都是对象，不是同一个引用，所以是false

