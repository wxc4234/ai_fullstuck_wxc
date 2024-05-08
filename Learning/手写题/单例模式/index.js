// class Person {
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

// console.log(p1 === p2); // 输出 true，说明只有一个实例被创建


class Person{
  constructor(name) {
    this.name = name;
  }

  static isSingle(name) {
    if (!this.instance) {
      this.instane = new Person(name);
    }
    return this.instance;
  }
}

let m = Person.isSingle('张三');
let n = Person.isSingle('李四');
console.log(m === n);