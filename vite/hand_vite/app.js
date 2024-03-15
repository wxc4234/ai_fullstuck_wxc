// node 的文件模版
const fs = require('fs');
// 路径模块 路径字符串边路径对象
const path = require('path');
// MVC 开发框架 vue
const Koa = require('koa');
const app = new Koa();

// 中间件
app.use(async ctx => {
  const { request: { url, query } } = ctx;
  // console.log(url);
  if (url === '/') {
    // 设置响应头 Header type字段
    ctx.type = 'text/html';
    // 读取文件
    let content = fs.readFileSync('./index.html', 'utf-8');
    // 设置响应体
    ctx.body = content;
  } else if (url.endsWith('.js')) {
    console.log(url, __dirname);
    // path.resolve() 方法会把一个路径或路径片段的序列解析为一个绝对路径。 有效的路径
    const p = path.resolve(__dirname, url.slice(1)); //__dirname 当前文件所在的目录，返回绝对路径
    ctx.type = 'application/javascript';
    const content = fs.readFileSync(p, 'utf-8');
    ctx.body = content;

  } else if (url.startsWith(/@modules/)) {
    // path.resolve 通过node_modules查找 将vue引入进来

  }
})

app.listen(12345, () => {
  console.log('vite 脚手架启动了...');
})