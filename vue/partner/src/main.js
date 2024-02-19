
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'vant/lib/index.css';
import "lib-flexible/flexible";
import "./assets/style/reset.css";
import "./assets/style/iconfont.css";
import { Button ,Picker,Field, Cell,CellGroup,Popup ,DatePicker ,Icon,Area ,NavBar , Col, Row,Swipe, SwipeItem ,TextEllipsis  } from "vant";

const app = createApp(App);

app.use(Button);
app.use(Picker);
app.use(Field);
app.use(CellGroup);
app.use(Cell);
app.use(Popup);
app.use(DatePicker);
app.use(Icon);
app.use(Area);
app.use(NavBar);
app.use(Col);
app.use(Row);
app.use(Swipe);
app.use(SwipeItem);
app.use(Icon);
app.use(TextEllipsis);


app.use(router);
app.use(store);
app.mount("#app");
