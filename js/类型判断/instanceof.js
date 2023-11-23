function myInstanceof(L,R) {
  // if (L.__proto__ === R.prototype) {
  //   return true
  // } else {
  //   if (L.__proto__.__proto__ === R.prototype) {
  //     return true
  //   } else {
  //     if (L.__proto__.__proto__.__proto__ === R.prototype) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   }
  // }

  let left = L.__proto__
  let right = R.prototype
  while (left !== null) {
    if(left === right) {
      return true
    }
    left = left.__proto__
  }
  return false
}
console.log(myInstanceof([], Array));
console.log(myInstanceof([], Object));