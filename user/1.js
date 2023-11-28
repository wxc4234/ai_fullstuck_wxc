//封装一个sleep函数，使1秒后输出hello

function sleep(t) {
  const p = new Promise(resolve => {
    setTimeout(() => {
      resolve('promise返回的hello world');
    },t)
  })
  return p;
}
// 异步通过promise的then来实现变成了同步
// sleep(1000)
//   .then((msg) => {
//   console.log(msg,'------');
// })
// 函数返回promise
// then里面
// console.log('hello');
// 声明这个函数是异步的
// await 后面跟的是promise对象，同步等待被resolve
// 代码的编写顺序 = 代码的执行顺序
  (async function () {
    const res = await fetch('https://qhabzb.laf.run/get-list')//耗时任务 fetch是promise的实例
     const data = await res.json();
        console.log(data);
})()