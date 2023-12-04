# 面向对象js 练手

- edittor.js 提供一个editInPlace类的功能
  - 复用
    - 一个文件一个挂载点
  - 封装
    - 实现的细节，只需要用，不需要了解为什么

- 动态DOM编程
  - document.createElement(tag)
  - 父节点挂载子节点
    - appendChild

- 函数this 问题
  - 在面向对象中，需要this始终指向实例，对象上的方法和属性
  - 事件监听的时候，会出现this丢失的问题，this会指向触发事件的对象
    - 作用域链
      - var that = this 外层this依然指向对象，保存
    - 箭头函数
      - 箭头函数没有this，this指向外层作用域
    - bind 绑定内部的this指向谁
      - bind apply call 都是改变this指向的方法，bind是返回一个新的函数不会立即执行，apply和call是立即执行