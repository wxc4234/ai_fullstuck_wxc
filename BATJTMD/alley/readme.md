# 前端界面开发之专业性

- 先结构，后样式，最后交互
  - 使用BEM命名规范
  - page+ hd/bd/ft

- npm i -g stylus （i是install的简称，-g 全局安装）
  - node 是全栈，是js的命令行，后端开发
  - npm 是node的包管理器
  - stylus 是css预处理器,用来提升css的开发效率
  - stylus --version 查看stylus版本
  - stylus -w common.styl -o common.css 监听common.styl文件的变化，自动编译成common.css文件
- common.styl
  - stylus是css的超集，所以stylus文件中可以直接写css代码 可以省去: ; {}等符号 提高效率 但是要注意缩进
  - 以tab键缩进，不要用空格
  - 如果失败，重新运行stylus -w common.styl -o common.css
    - watch 监听styl文件的变化，自动编译css文件
  - stylus嵌套
    BE里写样式的时候，自动补全css前缀

- stylus的功能
  - 支持变量
    - $变量名 = 值

- 阿里的适配神器 flexible.js
  - 在移动端不要使用px 这是绝对单位， rem vm/vh是相对单位
  - 1rem=html font-size
  - 不同的手机 html fint-size 回去设置，不一样
    - iphone 是设计稿的标准尺寸 375pt 750px 414pt
    - 100vm=10rem

- 移动端适配手写
  - 立即执行函数，不影响外界 把功能完成
  - 1rem = vw/10 兼容所有手机宽度
     设计稿上 750px  1rem=75px
     120px/75px=1.6rem
  - onresize 当屏幕尺寸发生变化的时候，执行函数
  - dry 设计模式原则 封装，复用
  - DOM的性能不太好，尽量缓存DOM元素
  - script标签 src属性加载一个资源，同步，会阻塞html的下载进程

- 后端素养
  - request python的http请求库
    - url(ip) + get请求 响应是 服务器给你返回的财经首页html的二进制流
    - response.text html的文本信息
  - parse 解析 BeautifulSoup(response.text, "html.parser")
    - python最擅长 文本，数据 解析 csv
  - find_all("a") 找到所有的a标签 dom查询 在内存中查找
    - 人生苦短，我用python  for link in links if "/news" in link and
  - 随机功能 random
    - random.choice(list) 随机选择一个元素