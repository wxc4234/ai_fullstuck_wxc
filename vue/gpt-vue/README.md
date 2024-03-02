## 项目的亮点和难点
 要有终局思维
- 可以安排和设计的
  - gpt AGI的时代
- AIGC 生成式的人工智能 OPenAI chatgpt是一种应用形式 chatbot
- 文本生成  文本生成图片（stablediffusion） 文本生成视频（sora）
- AGI 通用人工智能 机器人

- 智能驾驶
- 技术变革 LLM 加速了学习的速度和能力，什么都能做，团队里想通过未来三年的时间，能成为一名优秀的开发工程师，陪团队一起拥抱AI红利

- 技术栈 讲一下dependiences(依赖)
  - 打好文稿，练几次 项目介绍要1000字左右
  - vue / vue-router /pinia 全家桶
  - 陈述的过程，必需（没有亮点就是亮点）
  - typescript
  - 学习一下，dependiences(依赖) 有点深度的依赖包
    - markdown-it 解析markdown 成 html
    - crypto-js 安全性的加密
    - tailwindcss
      - 原子化css 让开发省力高效
      - css工程化 开发依赖 需要配置，会自动生成css文件
      - 解决了适配问题 适配rem
      - 自定义tailwindcss 组件类 @apply 应用一下 解决复用问题


### 项目亮点
  - 使用了路由懒加载
    - 优化了首页加载速度 性能关键 ()=>import('xxx')
    - Suspense 优化异步加载组件体验，比如显示loading
      - slot
        - 默认 具名插槽
    - 路由守卫
      - transition 页面动画
    - 骨架屏

  - 代码的封装写的挺好
    - 干净漂亮的分离一些函数，一个函数只做一个功能
      - 举例
        - getAPIkey  开源项目可以获得免费的APIkey
        -  clearMessageContent()
        -  switchConfigStatus()


- 难点
  - 使用了crypto-js 加密用户openai的api key 更安全
    - 引入了crypto-js
    - 调用AES.encrypt(原字符串，签名)方法
    - .AES.decrypt(加密字符串，签名)方法

- 功能点介绍
  - chatbot 模块
    - 与OpenAI LLM进行生成式问答功能
    - 使用了crypto-js 加密用户openai的api key
    - 根据功能点，函数封装的很细，便于复用和维护
      - getApikey saveApikey getSecretKey clearMessageContent switchConfigStatus