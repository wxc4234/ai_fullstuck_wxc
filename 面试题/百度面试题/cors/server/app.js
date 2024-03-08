const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Access-Control-Allow-Origin': 'http://192.168.196.149:5500' //发给浏览器的响应头，允许所有域名的请求

  });
  let data = {
    msg: 'hello world'
  }
  res.end(JSON.stringify(data));
})

server.listen(3000, () => {
  console.log('server is running at port 3000');
})