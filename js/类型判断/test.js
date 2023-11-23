function A() {
  
}
B.prototype = new A();
function B() {
  
}
C.prototype = new B();
function C() {
  
}
let c = new C();

C.prototype === C.prototype
