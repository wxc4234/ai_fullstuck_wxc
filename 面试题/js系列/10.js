// function Car(name) {
//   this.name = name;
// }
// Car.prototype.run = function () { }
// Car.sell = function () {
//   console.log('sell');
// }

// let car = new Car('Benz');
// car.sell();//not a function



class Car{
  constructor(name) {
    this.name = name;
  }
  run() {
    console.log('running');
  }
  static sell() {
    console.log('sell');
  }
}
let car = new Car('Benz');
// car.run();
car.sell();
console.log(car);
//  Array.from() 挂载到了Array上，所以可以直接调用，没有挂载到Array的原型上
// Array.isArray() 挂载到了Array的原型上，所以只能通过Array的实例来调用
