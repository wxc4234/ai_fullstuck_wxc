const http = require("http");
const url = require("url");

const responseData = {
  ID: "zhangsan",
  Name: "张三",
  RegisterDate: "2024年3月28日",
};
function toHTML(data) {
  return `
    <ul>
      <li><span>账号：</span> <span>${data.ID}</span></li>
      <li><span>昵称：</span> <span>${data.Name}</span></li>
      <li><span>注册时间：</span> <span>${data.RegisterDate}</span></li>
    </ul>
  `;
}

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(`http://${req.headers.host}${req.url}`);
  if (pathname === "/") {
    const accept = req.headers.accept;
    if (accept.indexOf("application/json") !== -1) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(responseData));
    } else {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(toHTML(responseData));
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(toHTML(responseData));
  }
});

server.listen(3000, () => {
  console.log("3000 is ok");
});
