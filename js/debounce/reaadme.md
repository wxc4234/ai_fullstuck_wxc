# JS 八股文之防抖节流

## 前端"三清"

- window
    BOM 浏览器对象 负责body之外的浏览器功能
- document
    DOM js会跟DOM进行深度交流
- Object
    JS的顶层对象
    new Object() {}简写
    wan.__proto__(私有属性,原型) -> Object -> null
- JS类
  - 大写的函数作为构造函数
    new+this的方式运行 完成由{}空对象到构造完成的过程
    对象就有了属性
  - 对象的方法
    放在构造函数的prototype上
    wxc和Person没有血缘关系
    构造的过程 new Person   {}Object 空对象
    Person.prototype(原型对象) {}
  - Person.prototype 是原型
  - Object.prototype 也是原型
  - wxc.__proto__(也是原型)__proto__.__proto__
  - 原型在哪一栈上有的方法，对象都可以用
  - js面向对象不是血缘的，而是面向原型的