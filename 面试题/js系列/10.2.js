Parent.prototype.say = 'hello';
function Parent() {
  this.name = 'parent';
}

function Child() {
  Parent.call(this); // 将Parent的this指向Child的this
  this.type = 'child';
}

let c = new Child();
console.log(c.say);

