const Koa = require('koa'); //commonJS
const bodyParser = require('koa-bodyparser'); //解析post请求的参数
const app = new Koa();
const cors = require('koa2-cors'); //解决跨域
const user = require('./routes/user.js')
const note = require('./routes/note.js')

app.use(cors());
app.use(bodyParser());



// const main = (ctx) => {
//   console.log(ctx.request.body);
// }

// app.use(main);

app.use(user.routes(), user.allowedMethods());
app.use(note.routes(), note.allowedMethods());
app.listen(3000, () => {
  console.log('linstening on port 3000');
})