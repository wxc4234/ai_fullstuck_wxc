#

- html结构要注意哪些点
  - 先写好结构，要看到盒子
  - 语义化标签，对SEO有友好(搜索引擎优化)

- 移动端组件的概念
  - 70%的工作是不用做的
  - 组合html+css+js，完成一个功能，并且可以复用
- weui-cells .weui-cells_form
  - weui-cells是非常常用的组件，weui-button也是非常常用的组件
  - 移动端表单或者列表，都交给weui-cells来完成
- weui-uploader 上传界面组件
- webkit 是一个内核，浏览器内核
  - 安卓手机，苹果手机(safari) 都是webkit内核
  - 要使用在实验阶段的样式，前面加上-webkit前缀
- 移动端单屏幕，滑动操作的规矩：
  - html body height:100%; 方便子元素继承

- stylus 的语法点
  - css的超集
    - 直接写css也可以
  - 定义变量，嵌套，省略等...
  - 嵌套给css带来了作用域，模块的概念
  - &虽然是缩进的，但是不是父子关系，而是同级关系，modifier常用，本质是文本替换
  - BEM BE &去抄Block

- weui-cells
  - weui-cells 组成
  - __title