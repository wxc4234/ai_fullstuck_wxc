- vue的深入语法
  <template>
  <div>
    <div>1</div>
    <div>2</div>
  </div>
  </template>
- 为什么在vue2中，template中的div必须有一个根元素？而在vue3中不需要？
view -> vDom -> node -> 外层节点 -> 统一挂载
它们需要有一个外层的节点进行比较，这样才能简单方便的完成挂载操作
缺点是：为了挂载而添加了一个外层节点，但是不需要有这个共同的父亲节点

为什么vue3不需要呢？
在vue3中使用了 Fragment 组件类型，这是一个文档碎片 doucument.createFragmentElement
Fragment 是node的一种类型，它可以起到容器的功能，但是他会自动消失


- vue 组件的类型 vNode 的type值 tag 可以是 div|Component|Fragment|文本
  - Flag 位运算
- vue 的 compile 源码

- vue3 中的Proxy是如何深入的代理对象的
  const obj = {
    a: 1,
    b: {
      c: 2
    }
  }
  const data = rejective(obj)
- 重写响应式
  - vue2 的 defineProperty 优点是：兼容性更好
    - 但是性能不好，它只能一次代理一个属性，如果属性是对象或者数组，那么需要递归的代理，深度的话，一开始就要进行递归处理
    - 数组 只支持他的索引上的修改，不支持增删移位，因为新增的属性没有defineProperty，所以他不会触发更新
    - 那就要去重写数组的方法，让他们触发更新，在这些方法中我们再添加 track 收集
  - vue3 的 Proxy + class 的getter和setter来实现的
    - Proxy 的开销比较大（单个） 多个小的
    - 他的本质就是拦截器 + 响应处理 因此我们可以借助 Proxy 来代理对象，使用class的geter和setter来实现简单的数据类型
    - 它有一个懒代理的特性，只有在Object.c的时候才会触发get 之后才会new Proxy

- 为什么vue3 的响应式更优秀
  - 它的响应式使用了 ref+reactive
    - 在ref中使用了（class中的getter和setter）
    - 在reactive中使用了 （proxy它的开销大）
  - Proxy 可以一次性代理整个对象，支持多达13中的拦截方法
  - 他还支持懒代理，只有在需要的时候才会做深层次的代理它的实例化是在使用到它的时候才会实例化，递归
  - defineProperty 一开始就要递归，遍历一个个属性进行代理，性能不好，但是兼容性好


