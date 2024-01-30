# 路由的钩子函数

1. 全局守卫
   1. router.beforeEach((to, from, next) => {})
   2. router.beforeResolve((to, from, next) => {})
   3. router.afterEach((to, from) => {})

2. 路由独享的守卫
    1. beforeEnter: (to, from, next) => {}
3. 组件内的守卫
    1. beforeRouteEnter(to, from, next) {}
    2. beforeRouteUpdate(to, from, next) {}
    3. beforeRouteLeave(to, from, next) {}

# keep-alive

  包裹需要缓存的组件
  onActivated
  onDeactivated