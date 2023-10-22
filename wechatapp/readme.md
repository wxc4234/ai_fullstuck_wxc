# 路虎4s店小程序开发

- 需求来于4s店
     看车 一键询问
     非常接地气，微信小程序生态

- html + css + javascript
    wxml

- 小程序的基本知识
    page 来写
      index 首页 目录  直接分层
      index.wxml ---html   view相当于div 小程序有哪些标签
      index.js
      indx.wxss ---css
      index.json

- swiper组件
   幻灯片
  - swiper-item
   定时器
   开发看文档的思想 AI英文
   调试工具的使用

- 相对单位
  - 解决适配的问题
       适配PC 手机 平板
  - rpx 小程序中少用或不用px
       retina 3倍Retina 1rpx=3px
       vh view height（视窗高度）
       vw view width（视窗宽度） 100=满屏

- 小程序有时候会卡 重启
- 给一个元素多个类名 在选择的需求上 使代码更好的复用和维护
    white 可以给别的元素用
    hero 主题
    section

- 从外到内
    盒子 而不是标签 页面的布局
    元素的类型两种 行内和块级

- 取类名才是技术活
  - 用最简单的单词
  - 选择器前加限定
  
- js
  - data 里面的数据可以绑定到页面上
  - 模版不是静态页面    有数据驱动的动态

- 小程序开发架构思想
  - 让开发者简单，小程序就有了以下预设
  - pages的概念
      wxml/wxss/js/json 组成
  - wxml 模板
    标签是小程序自带标签 view swiper 是html没有的
    不是页面，它是活的，动态部分需要进行数据绑定，绑定了数据{{}}和指令的wx:for
    只要数据发生改变，他就会自动刷新
    - js
       data 可以绑定到模板的数据{{}}
       onload 生命周期 wx.request 去取数据 （后台）
       this.setData{
        slides: res.data.slides
       }