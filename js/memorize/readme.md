# 两数相加

- 伪数组 Arguments
  - Object.prototype.toString.call(arguments) === '[object Arguments]'
  - 它有一个length属性，但是没有数组的其他属性
  - 可以使用下标访问，但是不是真正的数组，没有join等方法
  - Array.from(arguments) 可以将其转化为数组
  - [...arguments] 也可以将其转化为数组,展开运算符,ES6
  - Array.prototype.slice.call(arguments) 也可以将其转化为数组

- 要检验参数，代码一定要健壮

- var obj = {a:1}
  - 内存中有一个对象，这个对象有一个属性a，值为1
  - 头部前三位表示数据类型 000 以二进制存储
  - null 开头也是000，但是null是没有对象的，所以null的类型是object

- 递归
  - 自顶向下解决问题
    - 不停地函数入函数执行栈解决问题
  - 重复计算
    - 可以使用memorize解决，将计算结果缓存起来，使用记忆函数
  - 不能被允许的问题
  - js 优点
    - cache 不用写在全局，js中有闭包，可以将cache写在函数内部
    - 闭包的缺点：内存泄漏，不会被垃圾回收机制回收