const Koa = require('koa');
const app = new Koa();

const main = (ctx) => { //ctx等同于req和res
  // console.log(ctx.query.id);
  // ctx.body = `hello ${ctx.query.id}`
  //``是es6的模板字符串,可以直接换行，而且可以直接引用变量，不需要用+号连接，这样更加方便
  console.log(ctx.url);
  if (ctx.url.startsWith('/login')) {
    // 前端在登录
    ctx.body = {
      data: 'success',
      msg: '登录成功',
    }

  } else if (ctx.url.startsWith('/home')) {
    // 前端想要首页的数据
    ctx.body = {
      data: [
        { id: 1, name: 'Tom', email: '123456@qq.com' },
        { id: 2, name: 'Tom2', email: '123456@qq.com' },
        { id: 3, name: 'Tom3', email: '123456@qq.com' },
      ]
    }
  }
}

app.use(main);

app.listen(3000, () => {
  console.log('项目已启动');
})