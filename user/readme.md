# Promise

- es6 最大的特点就是引入了 Promise 对象，这是一个构造函数，用来生成 Promise 实例。
- Promise 类，then 控制执行流程
  - JS是单线程的，耗时任务(定时器、事件)，先跳过，接着执行下面的代码，等到耗时任务结束，再回过头，把结果写进内存。
  - 缺点是：它是异步的，代码的编写顺序和执行顺序不一致，会造成很大的不便。
  - 将定时器、请求等耗时任务，封装成 Promise 对象，一旦执行完毕，就会自动执行 then 方法指定的回调函数，这样就避免了层层嵌套的回调函数。
  - 实例生成以后，可以用 then 方法分别指定 resolved 状态和 rejected 状态的回调函数，以此控制异步操作的流程。
  - 调用 resolve 函数就可以运行 then 方法指定的回调函数。
- Promise 本质上是一个状态机，它有三种状态：pending（进行中）、fulfilled（已成功）和 rejected（已失败）。
- Promise 实例生成以后，可以用 then 方法分别指定 resolved 状态和 rejected 状态的回调函数。
