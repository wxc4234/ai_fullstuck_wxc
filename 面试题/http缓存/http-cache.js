const http = require('http')
const url = require('url')
const path = require('path')
// node自带的文件系统
const fs = require('fs')  // 文件系统
const mime = require('mime-types')


const server = http.createServer((req, res) => {
  // 将前端请求的地址转换成url格式，再拼接www这个路径，最后读取整个文件的绝对路径
  let filePath = path.resolve(__dirname, path.join('www', url.fileURLToPath(`file:/${req.url}`)))
  // console.log(filePath);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath) // 读取一个文件的详细参数
    const isDir = stats.isDirectory() // 判断是否是文件夹




    if (isDir) {
      filePath = path.join(filePath, 'index.html')
    }

    if (!isDir || fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath) // 读取文件
      const { ext } = path.parse(filePath);
      const timeStamp = req.headers['if-modified-since'];
      let status = 200;
      if (timeStamp && Number(timeStamp) === stats.mtimeMs) {
        status = 304;
      }
      console.log(ext);
      res.writeHead(200, {
        'Content-Type': mime.lookup(ext),
        'Cache-Control': 'max-age=86400', // 一天
        'etag': `${content}`
        // 'Last-Modified': stats.mtimeMs //时间戳
      })

      return res.end(content)
    }
  }
  res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' })
  res.end('404')
})

server.listen(3000, () => {
  console.log('3000 is ok')
})