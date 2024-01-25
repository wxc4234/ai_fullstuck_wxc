
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'vant/lib/index.css';
import "lib-flexible/flexible";
import "./assets/style/reset.css";
import { Button ,Picker,Field, CellGroup,Popup ,DatePicker ,Icon,Area ,NavBar  } from "vant";

const app = createApp(App);

app.use(Button);
app.use(Picker);
app.use(Field);
app.use(CellGroup);
app.use(Popup);
app.use(DatePicker);
app.use(Icon);
app.use(Area);
app.use(NavBar);


app.use(router);
app.use(store);
app.mount("#app");
