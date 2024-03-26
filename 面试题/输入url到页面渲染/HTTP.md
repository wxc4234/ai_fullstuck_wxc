#  HTTP(超文本传输协议) /0.9
- 基于TCP的连接协议
- 只有请求行 比如 `GET /index.html`
- 以ASCII字符流的方式来进行传输

# HTTP /1.0
- 0.9的缺点：只支持HTML一种类型的资源传输
- js,css,图片,音频,视频等各种类型的资源无法传输

- 增加了请求头和响应头
  - 请求头：
    - accept：text/html
    - accept-encoding：gzip,deflate br；
    - accept-language：zh-CN,zh;q=0.9
  - 响应头：
    - content-type：text/html
    - content-length：1024
    - content-encoding：gzip
    - content-language：zh-CN

- 为了传输不同的类型资源而诞生的



# HTTP /1.1
- 1.0的缺点：每次请求都需要建立一个TCP连接，请求完毕后就断开连接
- 1.1的优点：支持长连接，一个TCP连接可以发送多个请求, 也就是持久连接，减轻了服务器的压力

- 同时最多维护6个长连接

- 队头阻塞问题：一个请求占用了连接，其他请求就会等待，这就是队头阻塞问题
  - 前一个http请求没有得到响应，后一个http请求无法发送

- HOST

- 响应头：
  - 1.0中Content-length: 1024

- 后端动态内容生成，无法确定数据大小
  - 于是采用了 Chunked Transfer 机制：将资源文件处理成若干个数据块，
  并标记数据块的大小，最后发送一个标记为 0 的数据块来告诉客户端资源传输完成