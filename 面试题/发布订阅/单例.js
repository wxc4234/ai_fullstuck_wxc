// class Person{
//   constructor(name) {
//     this.name = name;
//   }
//   static getInfo(name) {
//     if (!this.instance) {
//       this.instance = new Person(name);
//     }
//     return this.instance;
//   }
// }

// let p1 = Person.getInfo('张三');
// let p2 = Person.getInfo('李四');

// // 要使结果为true,保证无论new多少次，只有一个实例
// console.log(p1 === p2);


function Storage() {
  this.name = '张三'
}

const Helper = (function () {
  let instance = null
  return function () {
    instance = new Storage()
    return instance
  }
})()

let p1 = new Person(); // {name: '张三'}
let p2 = new Person();
// 要使结果为true,保证无论new多少次，只有一个实例
console.log(p1 === p2);