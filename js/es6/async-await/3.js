function a() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log('万先澄');
      resolve();
    }, 2000);
  })

}
function m() {
  return new Promise(() => {
    setTimeout(() => {
      console.log('喝奶茶');
      b();
    }, 1000);
  })

}

function b() {
  console.log('喝珍珠奶茶');
}

async function foo() {
  await a();
  await m();
   b();
}
foo();