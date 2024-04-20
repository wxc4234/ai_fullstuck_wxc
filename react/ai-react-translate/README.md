# react + AI 结合

- 百度翻译
  - nlp 任务 翻译
    选择语言 交给transformers.js ，它是huggingface社区推出的transformers Python的平替版

- 项目介绍
  - 代码优化
    - 函数封装
    - 配置const 声明大写
    - 面向对象封装
      - es6 提供了类java等企业级大型项目的class static extends get set等语法糖机制 （底层还是原型式）
      - transformers pipeline 封装了一个MyTranslatePipeline 的类
        - 这个类使用了单例模式
          - 因为开销很大，只能实例化一次，在一次任务中，也只需要一次，之后可以复用，单例模式杜绝了没必要的多次实例化，就比如登录框

- transformers.js 库
  - 为什么要写成单例
    - 因为它的开销很大，只能实例化一次，之后可以复用
  - 耗时发生在哪里？
    - initiate 时，加载模型，加载模型的时间很长
    - progress 时，加载模型的进度条
      - file percentage
      - 显示下载进度条 (模型运行在前端，需要下载模型，模型很大，需要下载很久)
    - done 时，加载模型完成
      - 将下载的进度条隐藏 移除 filter percentage
    - update
      - 执行nlp 的translate 翻译任务