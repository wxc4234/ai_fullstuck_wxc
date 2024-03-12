function foo(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 2)
    }, 1000)
  })
}
function* gen() {
  const num1 = yield foo(1)
  console.log(num1);
  const num2 = yield foo(num1)
  console.log(num2);
  const num3 = yield foo(num2)
  console.log(num3);
  return num3
}


function generatorToAwait(generatorFn) {
  return function () {
    const g = generatorFn()
    return new Promise(function (resolve, reject) {
      // g.next()
      // g.next()
      // g.next()

      function loop(key, arg) {
        const { value, done } = g[key](arg)
        if (done) { // generator 执行结束
          return resolve(value)
        } else {
          Promise.resolve(value).then(val => loop('next', val))// Promise.resolve(value) 保证value对象中的状态一定是fulfilled
        }
      }
      loop('next')

    })
  }
}

let asyncFn = generatorToAwait(gen)
asyncFn()