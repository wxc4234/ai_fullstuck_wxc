const http = require('http'); // commonJS是一个模块化的规范，nodejs是基于commonJS规范的

const server = http.createServer((req, res) => { //req是前端的请求，res是后端的响应
  // 业务逻辑
  console.log(req.url);
  console.log(req.url.split('?')[1]);
})

server.listen(3000, () => {
  console.log('listening on 3000 port');
})