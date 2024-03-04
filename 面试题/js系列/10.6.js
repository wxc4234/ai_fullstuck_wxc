Parent.prototype.say = 'hello'
function Parent(like) {
  this.name = 'parent';
  this.like = like;
}

Child.prototype = Object.create(Parent.prototype); //隐式继承了Parent.prototype的属性和方法
Child.prototype.constructor = Child; //显式继承了Parent的属性和方法
function Child(like) {
    Parent.call(this,like);
  this.type = 'child';
}



let c1 = new Child('coding');

console.log(c1);
