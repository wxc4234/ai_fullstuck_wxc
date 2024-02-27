# 1. js数组上有哪些方法？（题目一）
1. 增加： push  unshift  splice  concat
2. 删除：pop  shift  splice  slice
3. 改：reverse sort
4. 查：indexOf includes  lastIndexOf  find
5. 转换：join
6. 迭代：forEach  map  filter  some  every
7. Array.from()   Array.of()


# 2. js字符串上有哪些方法？（题目二）
1. 增：concat
2. 删: slice  substr  substring
3. 改：replace  trimRight  trimLeft  trim   padStart  padEnd  toUpperCase toLowerCase
4. 查：indexOf includes lastIndexOf find  endsWith  startWith
5. 转换: split

# 3. 谈谈js中的类型转换机制（题目三）
- 是什么：
js中有原始类型和引用类型：
原始类型：number  string  symbol  boolean  undefined  null  Bigint
引用类型：[]  {}  function  Date  Regexp  Set  Map

通常开发过程中，会用到一些显示类型转换的手段来完成逻辑开发
Number() ...

在V8执行过程中还存在另一种类型转换 --- 隐式类型转换

通常发生在  比较运算符  和  算术运算符

==  !=  <  >  if  while

+ - * / %


[] == ![]  //true

valueOf() 只能将包装类的对象转换为原始类型
任何引用类型转boolean都是true

# 4. == 和 === 有什么区别？（题目四）
==只判断值是否相等，不判断类型
===既判断值是否相等，也判断类型是否相等

# 5. 深浅拷贝的区别？如何实现深拷贝？（题目五）
深浅拷贝通常只用于引用类型
- 是什么：
  - 浅拷贝：只拷贝一层对象，复制这一层对象中的原始值，如果有引用类型的话，就复制它的引用地址
    - 常用的方法：Object.assign()  [...arr]  slice()  concat()
  - 深拷贝：层层拷贝，所有的类型的属性值都会被复制，原对象的修改不会影响拷贝后的对象
    - 常用的方法：JSON.parse(JSON.stringify(obj)) 但是无法处理函数、正则、Date等特殊对象，还有循环引用的问题
    - structedClone() 无法处理函数、正则、Date等特殊对象，还有循环引用的问题
    - MessageChannel() 有两个线程，一个线程发送消息，一个线程接收消息，这样就可以实现深拷贝,并且可以实现循环引用的问题

