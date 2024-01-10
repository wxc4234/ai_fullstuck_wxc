- vue全家桶
  - vue 组件和mvvm（响应式）
  - vue-router SPA 前端 路由:
    - #/about hash
    - /about history
  - vuex 状态管理 仓库
    - 假如你是京东 京东快 就是因为它们有仓库
    - UI component + 数据流归store管理
    - 如何将数据和组件分离

  - vue 的语法演变
    - vue2.0 的选项式api data methods computed watch
    - setup 语法糖 export default { setup() { return { } } }
    - vue3.0 组合式api composition api 最简洁
      - script setup
      - 干掉了this vue开发从面向对象变成了函数式编程

- 模块化
  - 组件就是一个模块 现在编写了一个counter组件
  - counter 组件可以把什么东西再模块化
    - 按钮可以分开  UI组件库 vant组件库 ElementPlus组件库
    - 组件中的数据可以分离出去
      - 数据是共享的 在兄弟组件中共享数据，以及陌生组件中共享数据，比如登录状态
  - 业务逻辑可以分离出去
    - 请求 生命周期 onMounted
  - 干脆把数据和组件分离 财务

- pinia的数据管理
  - 最先进的数据管理方案 vuex 落后了
  - 提供了defineStore函数 用于定义一个仓库store 仓库名字,函数返回状态及方法，取名use开头 和setup语法糖有点像
  - 组件只需要focus UI，不需要打理数据 完成职责分离
    - store就叫做数据模块
    - 组件就是UI模块
  - main.js 入口中use一下 createPinia() 创建一个仓库


- 网易云音乐 幻灯片组件

- 前后端分离
  - 前端 8080 5173
  - 后端 3000 负责写api
  - http://localhost:3000/api/banner
  - 127.0.0.1 定位一台机器 可以运行多台电脑

  - UI组件 数据管理 模块化
    - vue 项目中请求管理的 axios api

- api/目录 请求模块是vue项目的核心模块，前后端的协作
  - /api/index.js
    - 业务 列出来各种请求接口 getBannerData
  - /api/http.js
    - axios的封装,封装请求
  - 为什么不可以用fetch xhr
    - 流程性代码 代码可读性差，代码有重复性编写
  - 大型项目
    - 有几十个，几百个请求，模块化的需要
    - 散落在各个组件里的请求是很难管理的

- axios 封装
  - xhr,fetch只能实现请求功能，太弱小了
    - new XMLHTTPRequest()
  - 使用axios有什么好处
    -