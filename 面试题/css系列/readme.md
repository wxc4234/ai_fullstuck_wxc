# 请你说说你对css盒模型的理解(题目一)
1、是什么？
    浏览器在页面布局时，将所有的元素表示为一个矩形的盒子，这个盒子由元素的内容(content)、内边距(padding)、边框(border)和外边距(margin)组成。
2、标准盒模型
盒子总宽度：width + padding + border + margin

3、怪异盒模型（IE盒模型）
盒子总宽度：width + margin
盒子总高度：height + margin

# css中的选择器有哪些？说说优先级？(题目二)
1. id选择器
2. 类选择器
3. 标签选择器
4. 后代选择器
5. 子元素选择器
6. 相邻兄弟选择器
7. 群组选择器
8. 属性选择器
9. 伪类选择器
10. 伪元素选择器

优先级：
  !important > 行内样式 > id选择器 > 类选择器 > 标签选择器 > 通配符选择器 > 继承 > 浏览器默认属性




# 请你说说css中的单位有哪些？(题目三)
1. px：像素,屏幕上的一个点
2. rem：相对于根元素的字体大小，相对单位，相对于根字体大小的单位 1rem=16px
3. em：相对于父元素的字体大小,相对单位，用于字体上相对于父元素字体大小的单位，用在他处相对于自身字体大小的单位 1em=16px
4. vw：视窗宽度的百分比 1vw=1%的视窗宽度
5. vh：视窗高度的百分比 1vh=1%的视窗高度
6. %：百分比， 相对于父元素的百分比

# 说说设备像素，css像素，设备独立像素，dpr，ppi的区别？(题目四)
1. PC端 1px = 1物理像素
2. 页面缩放比为1:1时，1px = 1物理像素
3. 设备像素 == 物理像素
4. css像素==1px
5. 设备独立像素 ==分辨率
6. dpr(设备像素比) = 设备像素/设备独立像素
7. ppi(像素密度) = 设备像素/屏幕尺寸

# css中有哪些方式可以隐藏页面元素？区别是什么？(题目五)、
1. display:none;  不占据空间 ,脱离文档流 无响应事件 会回流重绘
2. visibility:hidden; 占据空间 无响应事件 只会重绘
3. opacity:0;  占据空间 有响应事件 回流重绘 || 只会重绘
4. position:absolute;left:-9999px;  占据空间 脱离文档流 ，无响应事件，会回流重绘
5. clip-path: polygon(0 0, 0 0, 0 0, 0 0) 占据文档流 无响应事件 只会重绘

# 谈谈你对BFC的理解？(题目六)

1. 是什么？
 - BFC(Block Formatting Context)块级格式化上下文
 - 是页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用

2. 渲染规则
  - BFC容器在计算高度时，浮动元素的高度也会参与计算
  - BFC容器内的子元素的margin-top不会和BFC这个父容器发生重叠
  - 遵照从上往下，从左往右的规则排列

2. 触发条件
   - overflow不为visible
   - float不为none
   - position为absolute或fixed
   - display为inline-block、table-cell、table-caption

3. 应用场景
   1. 清除浮动
   2. 防止margin重叠




# 水平垂直居中的方法有哪些？(题目七)
1. position: absolute + transform: translate(-50%, -50%) || margin负值
2. display: flex + justify-content: center + align-items: center
3. display: grid
4. table: text-align: center + vertical-align: middle(子容器不能是块级)
5. margin(已知宽高)

# 三栏布局怎么实现？
- 两栏布局
  1. flex
  2. grid
  3. float + margin

- 三栏布局
  1. flex
  2. grid
  3. 左右先加载内容后加载，float + margin
  4. 圣杯布局：左右定宽，中间自适应 float + margin负值+position:relative
  5. 双飞翼布局：margin负值