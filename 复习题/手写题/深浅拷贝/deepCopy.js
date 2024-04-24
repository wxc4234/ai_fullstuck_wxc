let obj = {
  a: [1,2,[3,4]],
  b: {
    c: 2
  }
}

// 1. 可以使用递归的方法实现深拷贝
function deepCopy(obj) {
  let newObj = {};
  for (let key in obj) {
    if (obj[key] instanceof Array) {
      newObj[key] = [];
      for (let j = 0; j < obj[key].length; j++){
        newObj[key][j] = obj[key][j];
      }
    } else if (typeof obj[key] === 'object') {
      newObj[key] = deepCopy(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

let newObj = deepCopy(obj)

obj.b.c = 3;
console.log(newObj);