function a() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log('万先澄');
      m();
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

a()
.then((res) => {// then显示在promise的原型上 then自己会返回一个promise
  return m(); //当return一个promise的时候，会等待这个promise执行完毕，再执行下一个then
})
.then(() => {
    b();
})

// console.log(a());