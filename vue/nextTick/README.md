# nextTick

在DOM更新完毕之后执行的回调函数,起到了等待DOM
编译模版是同步代码
nextTick是异步代码,且是微任务,页面渲染完成后执行

MutationObserver是一个DOm变化观察者,可以监听到DOM的变化,当DOM发生变化时,会执行回调函数,是异步，是微任务