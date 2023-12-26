# 项目工程化

- 开发vue项目，spa应用
  - 工程化视角，打地基，搭建脚手架
    - vue create 或者是npm init vite 不用从零开始
  - 项目的开发模板
    - npm init vite  vite就是一个脚手架 开发流程也是一个工艺
  - vite 就是这套生产工艺流程
  - vue/js 技术栈
  - 生产了一个开发模版，一个项目文件包
  - npm i 安装依赖
  - npm run dev 启动项目

- 组件思想
  - template 里面写的非html标签，都是组件，组件可以复用，同事之间复用，项目之间可以复用 <Rate/>
  - components/Rate.vue下的组件，可以复用，可以在其他组件中使用
  - 父子组件通信 父组件负责管理数据，子组件负责渲染数据(专门负责UI 简单的组件)
    - 怎么给<Rate value=""/>传值 props 外部传参
  - 数据有状态，响应式，数据改变(状态改变)，页面会自动更新(热更新)
    - let score = ref: 用来获取dom元素，获取组件实例,获取数据，状态数据 App.vue data 自有数据
    - score.value = 4 触发了状态数据的改变，用到他的地方，进行响应
  - 数据类型有 data props computed 123456 123,456
  - 单向数据绑定
    -