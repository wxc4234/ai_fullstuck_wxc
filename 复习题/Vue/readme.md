- vue-router中的路由守卫有哪些，分别在什么时候触发
  - 全局路由守卫：
    - 全局前置守卫router.beforeEach(): 在路由跳转之前触发，可以用来做权限判断,接受三个参数：to, from, next
    - 全局解析守卫router.beforeResolve(): 在beforeEach之后触发，可以用来做一些异步逻辑，接受三个参数：to, from, next
    - 全局后置守卫router.afterEach(): 在路由跳转之后触发，没有next函数，不能改变导航
    - 路由独享守卫: 在路由配置中直接定义beforeEnter属性,它会在路由独享守卫和全局解析守卫之后被调用，但在全局后置钩子之前被调用


- vue中的组件通信
  - 父子组件通信：
    - 父组件通过props向子组件传递数据，子组件通过this.$emit()来触发父组件的事件
    - 父组件通过provide向子组件传递数据，子组件通过inject接收数据

- vue2和vue3之间的区别：
  - 对于响应式原理的改变
    - 在vue2中使用的是Object.defineProperty来实现响应式的，但是这个方法有着缺陷，它无法监听数组的变化，在vue2中通过增加了$set和$delete解决了一部分问题，但是它只能监听数组的下标的变化，而不能监听数组的长度的变化，因此在vue2中是通过重写数组的方法来实现的
    - 在vue3中通过引入了Proxy来实现响应式的，在Proxy中他借助了reactive和ref来实现响应式的，它也借助了Class身上的get和set方法来实现响应式的


- 为什么Vue 3要推出组合式API:
  - 在vue2中，组件的逻辑是通过选项的方式来组织的，比如data、methods、computed等，当组件的逻辑复杂时，代码就会变得不易维护，因此vue3推出了组合式API，可以更好的组织组件的逻辑
  - 并且组合式API还有更好的复用性，它可以更好的抽离逻辑，使得逻辑更加清晰

