
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'vant/lib/index.css';
import "lib-flexible/flexible";
import "./assets/style/reset.css";
import { Button ,Picker,Field, CellGroup,Popup  } from "vant";

const app = createApp(App);

app.use(Button);
app.use(Picker);
app.use(Field);
app.use(CellGroup);
app.use(Popup);




app.use(router);
app.mount("#app");
