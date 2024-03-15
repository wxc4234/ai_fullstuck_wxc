# vite 工程化

- 前端项目构建脚手架
  - 快速启动项目
    - git 上拉取一个项目
  - 命令行工具
    - 代码的编译 stylus -> css
    - es6 -> es5
  - 配置
    - alias等
  - 现代的前端框架，相比较与webpack 速度更快

- vite 让项目运行起来的流程
  - npm run dev发生了什么
    - 不到一秒就启动了，而webpack需要10秒左右 go rust 这种构建工具比node更快
      - type="module" 让浏览器支持es6模块化
        - 旧浏览器不支持 兼容性问题 ie11之前的浏览器不支持，这时候就需要webpack，将项目中所有的文件都打包
        - 而vite 基于type="module" 不用打包，直接运行
        - 为什么加了type="module" 就运行的更快了
    - 将根目录下的index.html作为首页 启动web服务