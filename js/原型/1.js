function Person(){
  this.name = '万先澄'
  this.age = 18

}
Person.prototype.say=function(){
  console.log('说话');
}
// Person.eat=function(){
//   console.log('吃饭');
// }
let p=new Person()
let p2=new Person()
// p.eat()
// console.log(p.say);
p.say()