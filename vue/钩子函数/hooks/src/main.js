import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// router.beforeEach((to, from, next) => {
//   document.title = to.meta.title

//   console.log(to, from);
//   if (to.path !== '/') {
//     const isLogin =  localStorage.getItem('isLogin')
//     if (isLogin) {
//       next()
//     } else {
//       // router.push('/login')
//       alert('你没登录，不允许跳去这个页面')
//       return
//     }
//   }
//   next()
// })

createApp(App).use(router).mount('#app')
