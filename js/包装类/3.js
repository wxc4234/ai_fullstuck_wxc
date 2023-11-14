// 对象的创建

// var obj={} //对象字面量
// var obj2=new Object(); //构造函数
// console.log(obj,obj2);
// 以上两种写法没有区别
// 自定义构造函数
function Car(color){
  this.name='BMW'
  this.height='1400'
  this.lang='4900'
  this.weight=1000
  this.color = color

  // new的功能 1.创建了一个空对象，2.往this身上添加属性和方法，3.返回this
//   var this={
//     name:'BMW',
//     height:'1400',
//     lang:'4900',
//     weight:1000,
//     color:color
  
//   }
}
// let car= new Car('green') // car实例对象 == this
// let car2= new Car('pink') 
// car.name ='劳斯莱斯'
// console.log(car);
// console.log(car2);
console.log(Car());