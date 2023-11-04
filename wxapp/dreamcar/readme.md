# 路虎4s店小程序

- 架构

  - page架构
      - wxml ->html
        小程序组件 div->view
      - wxss -> css
      - js ->
        onLoad 生命周期
        data  setData方法
      - json 配置
- 布局魔法 Flex 弹性布局
    - css的难点在于搞定布局
    - 二列式布局
      - float 浮动
      - flex 弹性
          可以让子元素在一行
          - flex：1 表示为主列
          其他列把宽度占完后，都给它
        - align-items: 垂直对齐的方式
        flex-start

- 早点学架构
    - 基础组件
      button reset cell ....
    - 业务模块

- 列表循环 List
  把数据库的数据展示出来
  <block wx:for="" wx:key="唯一值" >
  {{item.image}}
  </block>

- 数据请求
    onLaunch 发送一次数据请求