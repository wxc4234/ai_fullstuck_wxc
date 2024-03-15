import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 将 import 改成 require函数 就可以支持了
// 前端在ES6之前是没有模块化的
// 所有的依赖关系全部打包完 bundle.js

// type="module" 只需要加载需要的文件，不需要加载全部的文件就能运行 vite也就是bundless

createApp(App).mount('#app')
