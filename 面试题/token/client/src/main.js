import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
// 1. 引入你需要的组件
import { Button, Form, Field, CellGroup } from 'vant';
import 'vant/lib/index.css';

const app = createApp(App)

app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);

app.use(router).mount('#app')