function Foo() {}
let  foo=new Foo();

foo.__proto__ === Foo.prototype

Foo.prototype.__proto__ === Object.prototype
Object.prototype.__proto__ === null