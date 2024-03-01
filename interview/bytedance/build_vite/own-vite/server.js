// koa是nodejs的一个web框架 commonjs规范
// 服务器端 vite 是用服务器端实现的

const Koa = require('koa');
const fs = require('fs'); // node文件系统 内置的模块
// 实例化一个koa对象，就是一个后端应用 OOP
const app = new Koa();

// ctx 上下文对象 ctx.body 响应体
app.use(async ctx => {
  // http 是基于请求和响应的简单协议
  // index.html 返回给用户就看到首页了
  // index.html要交给ctx.body
  // 字符串二进制流
  // 代码在内存中运行
  // 冯若依曼原理
  // 读取文件系统里面的index.html文件 fs模块
  // js是单线程的 异步的 node 支持异步同步化
  // I/O 操作是异步的，花时间
  let content = fs.readFileSync('./index.html', 'utf-8');
  ctx.body = content;
})

// 后端启动web服务 监听5174端口
app.listen(5174, () => {
  console.log('项目在5174端口启动成功！');
})