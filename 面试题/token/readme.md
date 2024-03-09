# token (令牌)

- cookies 是浏览器的内存空间，但是受后端的掌控，后端将登录令牌保存在cookies中，所有被保存在cookies中的数据，
都会在http请求时自动被携带在请求头中


- 由 头部 - 负载 - 签名 三部分组成

- 前端登录后，后端校验账号密码成功后，考jwt生成一个token，并将tiken发给前端，前端接受到token后，将token保存到浏览器本地存储中
封装了axios，在请求拦截中为每一次的请求头中添加一个Authorization字段，之后的接口请求，后端获取到请求头中的Authorization字段，解析token，校验token的合法性，如果合法，就返回数据，如果不合法，就返回401状态码