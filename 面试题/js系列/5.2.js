let obj = {
  a: 1,
  b: {
    c: 2
  }
}

// let newObj = JSON.parse(JSON.stringify(obj))


let obj2 = deepCopy(obj)
function deepCopy(obj) {
  let newObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) { //hashOWNProperty是用来判断一个对象是否有你给出名称的属性或对象。如果有则返回true，没有则返回false。
      if (typeof obj[key] !== 'object' || obj[key] === null) {
        newObj[key] = obj[key];
      } else {
        newObj[key] = deepCopy(obj[key]);
    }
  }
}
  return newObj;
}

console.log(obj2);