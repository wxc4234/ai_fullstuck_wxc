// 函数修饰符 函数内有异步 es7
(async function () {
  // js是单线程语言，异步是为了解决单线程的问题 放入event loop
  // thenable 异步任务中控制执行顺序
  // fetch('https://hhzpsi.laf.run/get-list')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  // console.log('OK');
  // 异步变同步，有利于流程控制
  const res = await fetch('https://hhzpsi.laf.run/get-list');
  const {data} = await res.json();
  console.log(data);
  console.log('OK');
})()