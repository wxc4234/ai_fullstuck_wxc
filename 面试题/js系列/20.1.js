console.log(1);  // 1 7 9  3  6  8  4 5 2

async function fn() {
  console.log(7);
  await fn2()  // 提前执行
  console.log(8);  // await会将后续的代码挤入到微任务队列
  console.log(10);
}

async function fn2() {
  console.log(9);
}
fn()

setTimeout(function() {
  console.log(2);
}, 0)

new Promise(function(resolve, reject) {
  console.log(3);
  resolve()
})
.then(() => {
  console.log(4);
})
.then(() => {
  console.log(5);
})

console.log(6);