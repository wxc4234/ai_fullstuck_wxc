# Vue 单页应用
整个项目只有一个html文件，所有的页面都是在这个html文件中切换的，这就是单页应用的概念。

在vue中，我们写的每一个页面都是一个html代码片段
然后通过特殊的手段实现，每次只让一个代码片段生效，也就模拟成了多个htnl文件一样的效果。

## vue-router(特殊的手段)

1. router-link
2. router-view
3. 二级路由

## 路由跳转
1. router-link
2. this.$router.push() 编程式路由跳转
3. 路由传参 {path: "xxx",query: {}}  {name: "xxx",params: {}}