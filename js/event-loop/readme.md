# 进程 & 线程

## 进程

- 进程指的是cpu运行指令及加载和保存上下文所需的时间
- 进程包括线程和其他资源，线程包括执行上下文和执行指令

## 线程

- 线程是进程中更小的单位，指的是一段指令执行所需的时间

## 浏览器新开一个tab页，就是开了一个进程

- 渲染线程
- js引擎线程
- http请求线程

- 线程之间是可以一起工作的，但是渲染线程和js引擎线程是互斥的，因为js可以修改dom结构，如果同时操作dom，就会造成不可预料的结果

## js是单线程的

优点：
    - 节省内存
    - 没有锁的问题，节约了上下文切换的时间

## 异步

- 宏任务(macro-task) : script, setTimeout, setInterval, setImmediate, I/O, UI rendering

- 微任务(micro-task): Promise.then, process.nextTick, MutationObserver

## Event Loop

1. 执行同步代码
2. 当执行栈为空时，查询是否有异步需要执行
3. 执行微任务
4. 如果有需要，会渲染页面
5. 执行宏任务 ()