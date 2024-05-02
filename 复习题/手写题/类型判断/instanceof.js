// function myInstanceof(m,n) {
//   let L = m.__proto__;
//   let R = n.prototype;
//   while (L!==R) {
//     if (L === null) return false;
//     L = L.__proto__;
//   }
//   return true;
// }


function myInstanceof(m,n) {
  let L = m.__proto__;
  let R = n.prototype;
  while (L !== R) {
    if (L === null) return false;
    L = L.__proto__;
  }
  return true;
}

function Person() {}
const person = new Person();

console.log(myInstanceof(person,Person));