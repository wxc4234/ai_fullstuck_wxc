# 自我介绍
姓名 + 学校 + 做过什么 + 有过什么成绩 + 为什么能胜任(ai)

# 1. 数组上的方法，在js中的意义
var a=[]
a.push()
a.pop()

1. 创建对象字面量在v8的执行过程中相当与new了一个构造函数，通常我们不去直接new构造函数因为够简洁直观
2. 因为a相当于new Array()得到的，那么a的隐式原型（__proto__）指向Array.prototype，
v8查找属性的时候会先在对象上查找，找不到就会顺着对象的原型往上找

# 2. promise有几种状态，可以重复改变吗
1. 3种状态：pending、fulfilled、rejected

- 红绿灯算法

# 3. 输出结果
1. 引用类型的值怎么看？


# 4. 聊聊你对语义化的理解？
- 有哪些：header nav aside article section footer
- 优点：可读性好，搜索引擎优化，可以支持各个终端

# 5. 斐波那契


# 6. 用过什么AI工具
1. chatGpt  刻意练习prompt技巧，生成一些简单的前端网页
2. Copilot 提升开发效率
3. 最近在学习 transformer， openai技能，对大模型很感兴趣，也在学习LangChain,LLM
4. 自己准备一个大模型，介绍你对大模型的理解

# 7. 讲一讲 HTTP 的三次握手
- 三次握手是TCP协议建立连接时产生的
  - 客户端发送来连接请求到服务器，客户端状态进入 SYN_SENT 状态
  - 服务端接收到请求连接报文后，返回一个应答（包含ACK序号），服务端进入SYN_RECEIVED状态
  - 客户端接收到了统一连接的应答后，还要向服务端发送一个确认收到的报文，再进入ESTABLISHED状态

- 为什么一定要三次握手，两次行不行？
  不行，假设客户端给服务端发送了一个连接请求A,但是因为网络原因导致服务端没有收到，TCP会启动超时重传机制，客户端会再次发送连接请求B
  服务器端接受到B请求后，如果此时就完成了建立连接的话，当客户端和服务端通信完成后，便释放了连接，双方进入了CLOSED状态。
  假设此时A请求又抵达了服务端，那么服务端会认为客户端又要建立新的连接，从而应答该请求并进入ESTABLISHED状态,而此时客户端已经进入了CLOSED状态，所以客户端不会再次发送确认报文，服务端会一直等待，导致资源浪费

- 四次挥手
  - 客户端A认为数据发送完成，向服务端B发送释放连接请求
  - B收到释放连接请求后，返回一个ACK报文，
  - 进入CLOSE_WAIT状态，此时不再接受A发送的数据，但是还可以向A发送数据
  - B如果此时还有没发完的数据，就会继续发送，发完后向A发送释放连接请求，B进入LAST_ACK状态
  - A收到释放连接的请求，向B发送应答，进入CLOSED状态，B接受到应答也进入CLOSED状态


# 8. 说一说跨域

https://192.168.196.149:8080/user

协议号：域名 ：端口号 ：路径

- 同源策略： 协议号-域名-端口号 都相同的地址，浏览器才认为是同源

- 跨域：后端返回给浏览器的数据会被浏览器的同源策略给拦截下来

- 同源策略的目的是数据安全

## 解决跨域 （开发阶段好调试）
  https://192.168.196.149:8080 (前端vue)
  https://192.168.196.150:8080 (后端Go)
  此时前端和后端不是同源的，所以会产生跨域问题
- 解决方法
  - JSONP
    - ajax 请求受同源策略的影响，但是 <script> 标签的src属性不受同源策略的影响，且该属性也会导致浏览器发送一个请求
    1. 借助script的src属性给后端发送一个请求，且携带一个参数（'callback'）
    2. 前端在widnow对象上添加了一个 callback 函数
    3. 后端接收到这个参数 'callback' 后，将要返回给前端的数据data和这个参数 'callback' 进行拼接，成 'callback(data)',并返回
    4. 因为window上已经有一个callback 函数，后端又返回了一个形如'callback(data)'，浏览器会将该字符串执行成callback的调用

  - 缺点
    - 必须要后端配合，后端返回的数据必须是一个函数调用，前端才能接收到数据
    - 只能用于GET请求，因为script标签只能发送GET请求,浏览器加载资源只能用get请求

  - Cors (Cross-Origin Resource Sharing)-- 后端通过响应头来告诉浏览器不要拒绝接收后端的响应

  - node代理
    - 只在开发环境下生效，可以用vite
  - nginx代理 原理类似Cors，做白名单的配置 项目部署上线后使用的方案，生产环境下常用

  - domian 当iframe中，当父级页面和自己页面的 子域名不一样的时候，通过设置document.domain='xx'来将xx定为基础域，这样就可以实现跨域

  - postMessage
  在iframe中，父级页面和子级页面之间的通信，可以通过postMessage来实现跨域通信