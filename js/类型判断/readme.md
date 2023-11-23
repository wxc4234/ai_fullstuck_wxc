# 类型判定

## typeof

- typeof可以准确判定原始类型，null除外；但是无法判定引用类型，除了function，都会被判定为object

## instanceof

- instanceof可以判定引用类型，但是无法判定原始类型
- 通过原型链判断，只要处于原型链上，都会返回true
- 缺点：无法判断两个不同的全局执行上下文中创建的对象，因为两个全局执行上下文中的原型链是不同的，所以无法判断
- instanceof的内部机制：判断构造函数的prototype是否在对象的原型链上
- instanceof的原理：instanceof运算符用来测试一个对象在其原型链中是否存在一个构造函数的prototype属性，因此，instanceof的运算规则是：在原型链上查找，直到找到对象的原型对象，如果原型对象的prototype和类型的prototype相同，则返回true，否则返回false

## Object.prototype.toString()

1.
2.
3. 设O是ToObject(this)的执行结果，如果传的是原始类型，那就会调用ToObject将原始类型转换为对象
4. 设class是O的内部属性[[Class]]的值
5. 返回一个字符串String值，该值是连接三个String"[object", class, "]"的结果

- .cll(原始值)为什么不报错？因为原始值会被转换为对象
- toString通过读取数据结构内部属性来读取到数据的类型 class

## Array.isArray()

- 判断是否是数组