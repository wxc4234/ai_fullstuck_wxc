# js 是单线程的

- 代码是异步执行的，但是代码执行的顺序是同步的，因此效率更高了

## 回调函数

- 回调函数是一种异步编程的解决方案
- 回调函数的问题
  - 回调地狱：回调函数嵌套过多，导致代码难以维护

## Promise 对象

- Promise 对象是异步编程的一种解决方案

- Promise 实例对象后面可以接 .then() 方法 then中回调的执行取决于 Promise 的resolve() 有没有生效

- resolve() 的参数会传递给 then() 中的回调函数
- then方法会默认返回一个新的 Promise 对象，所以then方法后面可以接then方法，当then中有人为返回一个新的 Promise 对象时，then就会将人为返回的 Promise 对象作为唯一的返回值，那么后面的就相当于接在人为返回的 Promise 对象后面
- 当return一个promise的时候，会等待这个promise执行完毕，再执行下一个then

- Promise 对象的缺点
  - 无法取消 Promise，一旦新建它就会立即执行，无法中途取消
  - 如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部
  - 当处于 pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）

## async await

- async异步的解决方案，await等待异步操作完成