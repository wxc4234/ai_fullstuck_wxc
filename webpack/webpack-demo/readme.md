# vite之前的前端工程化脚手架

- 将项目跑起来
  - vue 项目 .vue 文件 .css文件(stylus) image...
  - 静态资源 打包成可执行的

- 打包
  - 将src目录下的资源打包到 index.html 中运行
  - vite 或者 webpack 现代MVVM开发框架 基于命令行的后端实现
  - webpack 就是用node写的
  - vite 是用node + go + rust 写的
- vite 和 webpack 的比较
  - webpack配置比较复杂，如entry output  plugins
    - webpack学习成本高 配置复杂
  - vite相对简单
  - vite script type="module" 引入main.js入口文件
    - 利用了es6的Module特性 更快 bundless
    - webpack 是早期的没有es6的module特性可以用，所以需要webpack来打理文件的依赖关系 也就是打包 但是打包很慢
  - dist目录就是我们要上线的目录
  - babel
    - js的语法转换器，将es6转换成es5 js就得到兼容性了，最新的语法就可以放心的使用了，不用担心兼容性问题，babel会帮我们转译
    - @babel/core 核心功能
    - @babel/preset-env 预处理 按我们的环境的要求编译成相应的代码 默认 es6+ -> es5
    - webpack 就相当于厂长，而babel就相当于车间主任，将相应后缀的文件拉到babel车间里面转译 这就是babel-loader
      - webpack 中用module rules配置 test /\.js$/ use: 'babel-loader' options: {presets: ['@babel/preset-env']} 进行预处理
      - 编译的工作时间