## openai api demo

- 自我介绍
  - 了解openai的接口调用，完成内容生成、情感分析 NLP任务
- 高级的模块化方案理解
  - 早起js 没有模块化方案
    - 早起用来完成事件，执行一些脚本
  - node
    - 程序执行的根本是 二进制可执行文件
    - js v8引擎 js 代码文本 -> v8字节码
    - node 使用c++ 封装了v8引擎 需要引入一个模块化机制 commonJS
    - 编译器
    - 缺点？ MVC ：MVC是一种设计模式，将应用程序分为三个核心部件：模型（Model）、视图（View）和控制器（Controller）。
    - /post -> 后端路由 -> controller
  - commonJS 和 ES6 模块化相比？ES6 Module更优秀
  - 如何在 node 中使用 ES6 Module 把文件改成 .mjs

- JS 模块化
- 异步处理
  - async/await ES7
  - 举例AIGC openai 接口 封装 chat async函数
    - 因为在内部调用的openai chat接口是异步的
    - chat message 是数组
      - system 出现一次，用于指定chat bot 的责任
      - user 用户 提问内容
      - assistant 助理，openai返回的内容
      - openai 可以接收比较长的token
      - messages 会越来越大，聊天上下文（context）
- open tokens 是有上限的，怎么办？ top_k
- LRU 最近最少使用算法
