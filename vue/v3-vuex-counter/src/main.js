import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 全家桶 需要启用一下
import { createPinia } from 'pinia' // 引入

createApp(App)
  .use(createPinia()) // 全局启用状态管理
    .mount('#app')