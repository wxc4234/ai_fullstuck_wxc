# 说说异步的发展史
1. 回调：会有回调地狱，会导致代码难以维护，排错困难

2. Promise

3. Generator
   1. 可以分段执行，可以暂停；
   2. 可以知道是否执行完毕
   3. 可以控制每个阶段的返回值

4. async/await === promise + generator
  - 原理：generator 控制异步执行时靠 promise 的状态变更，来手动控制 next 的执行；
   async/await 优雅性的原理体现在可以自动的执行 generator 函数中的next，控制yield的释放，主要的实现方式就是 递归调用 next ，next的执行结果需要为promise对象，next的递归调用应该在上一个 next 执行结果的 promise 状态变更为 fulfilled 后才递归，这样就能实现上一个 yield 后面的语句彻底执行出结果后才执行下一个 yield；也就实现了 await 的效果；