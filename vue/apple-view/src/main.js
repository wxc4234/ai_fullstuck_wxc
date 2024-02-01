import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import { Icon, Popup } from 'vant'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
import 'vant/lib/index.css'
import "./assets/style/reset.css";
import "./assets/style/iconfont.css";


const app = createApp(App)

app.use(Icon)
app.use(Popup)
app.config.globalProperties.$video = Video

app.use(router)
app.mount('#app')
