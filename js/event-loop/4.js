async function fn1() { //fn2end fn3end fn1end setTimeout setTimeoutend then then2end
  await fn2()
  await fn3()
  console.log('fn1 end');
}
fn1()
async function fn2() {
  console.log('fn2 end');
}
async function fn3() {
  console.log('fn3 end');
}

setTimeout(() => {
  new Promise((resolve) => {
    console.log('setTimeout');
    resolve()
  })
  .then(() => {
    console.log('then');
  })
  .then(() => {
    setTimeout(() => {
      console.log('then2 end');
    })
  })
  console.log('setTimeout end');
})