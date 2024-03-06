let c = {};

function instance_of(L, R) {
  // L.__proto___ === R.prototype;
   L = L.__proto__;
   R = R.prototype;
  while (L !== R) {
    if (L === null) return false;
    L = L.__proto__;
  }
  return true;
}

console.log(instance_of(c, Array));
console.log(instance_of(c, Object));