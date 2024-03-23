# 后台管理系统

- 开发的产品类型
  - 用户前台 vue 单页应用
  - 后端api服务 提供的是一个接口服务
  - 前后端分离
  - 后台管理系统
    - 开个权限
    - 公司内部的系统
      - vue3响应式中使用了proxy + ts解决类型问题，开发的严谨性，代码的质量 +
      - element-plus ui库组件 + 类库(echarts，axios，js-cookie，moment，sortablejs)

- vite配置
  - vite 工程化脚手架
  - 短路径 alias
    - @ -> src
    - views -> src/views
    - components -> src/components
    - interface -> src/interface
  - 自动加载element-plus组件
  - @types/node
    - ts有类型系统
    - 当使用node的模块时，ts会报错，需要安装@types/node path在ts中没有定义， 它是JS的产物
    - string  number + interface/ type 是在ts中定义的，不需要安装@types/node
    - 再安装一个node 的类型定义文件
    - vuex/vuex-router 为什么在ts中不需要安装类型定义文件 因为这两者是用ts写的，自带类型定义文件
    - vue3 也是99%用ts写的



- vue2和vue3的区别
  - 选项式的开发方式 -> 组合式的开发方式
    - 不需要this了，拥抱函数式编程
    - options api的缺点是：代码量大的话，不好维护，不好拆分
      - 数据只能放在data中，methods和getters中，相关的逻辑不好拆分
    - composition api 可以让响应式 reactive和ref + methods + onMounted 以业务逻辑为单位在一起

  - 响应式原理
    - vue2的响应式原理是基于Object.defineProperty 必须要一次性代理完 数组的索引变化 解决方法是可以通过$set
    - vue3的响应式原理是基于proxy
      - reactive是利用proxy实现的，有13种拦截方法，性能更好，proxy会做一个懒代理，只有在访问的时候才会代理
      - ref用的是面向对象的getter和setter 因为核心就是拦截 + track(get)和trigger(set) 依赖收集和派发更新 + effect

  - v-if  v-for的优先级的区别
    - vue3修正了 bug的问题，当v-if为false时就没必要渲染了

- weakMap理解
  - 依赖关系收集是靠全局的唯一的weakMap来存储的，以响应式对象为key，以属性为value，
  - proxy的好处是可以一次性代理，它的属性值用track收集的函数数组(effect)来存储，当属性值变化时，会执行函数数组，全部执行
  - 因为组件有很多，响应式对象有很多，路由组件很多，当组件下线时，路由切换了，有些响应式就不用维护了，weakMap会在响应式对象被垃圾回收后自动删除响应的项


- mock.js
  - 本地伪造数据接口