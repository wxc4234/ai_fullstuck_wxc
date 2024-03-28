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
      // 读取资源文件，向前端返回
      const content = fs.readFileSync(filePath) // 读取文件
      const { ext } = path.parse(filePath);
      console.log(ext);
      // if (ext === '.png') {
      //   res.writeHead(200, { 'Content-Type': 'image/png' })
      // } else {
      //   res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
      // }

      res.writeHead(200, { 'Content-Type': mime.lookup(ext) })

      return res.end(content)

      // const fileStream = fs.createReadStream(filePath) //读取文件将文件读取成流的形式
      // fileStream.pipe(res) // 将文件流写入res 将流类型资源汇入到响应体中
      // console.log(content);
    }
    // console.log(stats);
  }
  res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' })
  res.end('404')
})

server.listen(3000, () => {
  console.log('3000 is ok')
})