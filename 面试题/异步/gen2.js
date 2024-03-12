function foo(num) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(num * 2)
    },1000)
  })
}

function* gen() {
  const num1 = yield foo(1);
  const num2 = yield foo(num1);
  const num3 = yield foo(num2);
  return num3;
}

const g = gen();
const next1 = g.next();