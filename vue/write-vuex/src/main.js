import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'

// vue只负责响应式和组件 VDOM
// 其他的全交给生态
// 调用use 会调用install方法，也就是store.install(app)，而.use(router)会调用router.install(app)
//

createApp(App)
  .use(store)
  .mount('#app')
