// 函数，在JS中函数是一等对象
// 大写，以new的方式运行==构造函数 
function Person(name,age){
  // console.log(this);
  this.name = name
  this.age = age
}
// person属于类的方法  static 静态方法
// Person.sayHello=function(){
//   console.log('Hello');
// }

Person.prototype.sayHello=function(){
  console.log('Hello');
}
// new 和typeof都一样 运算符
// new在函数前面，这个函数就是以构造函数执行
// 函数是可以执行的对象 可以进入执行栈
// 数组是可以迭代的对象
// let wan= Person('万总',18)
// wxc是以Person为原型构造的，
// Person的原型是Object
let wxc= new Person('万先澄',18)
console.log(wxc.name,wxc.age)
wxc.sayHello();
console.log(Object.prototype.toString.call(wxc));
console.log(wxc.toString())
console.log(wxc.__proto__.__proto__.__proto__);