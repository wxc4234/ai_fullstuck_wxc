# js中的拷贝

通常只针对引用类型

## 浅拷贝

- 通过方法把某个对象完整拷贝后，原对象的修改会影响新的对象
- 常见的浅拷贝方法：
  - Object.create(obj) // 会继承原对象的原型链,创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
  - Object.assign({}, obj) // 不会继承原对象的原型链，创建一个新对象，将现有对象的属性和方法复制到新对象中
  - [].concat(arr) // 数组的浅拷贝，不会继承原数组的原型链，创建一个新数组，将现有数组的元素复制到新数组中
  - 数组解构赋值 [...arr]
  - arr.toReversed().reserse()  

## 深拷贝

- JSON.parse(JSON.stringify(obj)) // 会忽略undefined、symbol、函数，会抛弃对象的constructor，也就是深拷贝之后，不管这个对象原本的构造函数是什么，在深拷贝之后都会变成Object
- 不能处理undefined、symbol、function这些数据类型
- 无法处理循环引用

