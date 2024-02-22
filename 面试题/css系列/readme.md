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

# 三栏布局怎么实现？（题目八）
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


# 说说flexbox布局的理解？(题目九)
1. 是什么？
   - flexbox是一种一维的布局模型，可以实现弹性布局，可以简便完整响应式的实现页面布局，容器中默认存在两根轴：主轴和交叉轴.默认x轴为主轴，y轴为交叉轴
可以使用flex-direction属性来改变主轴的方向

2. 特点
 - 可以控制子元素在主轴上的对齐方式
 - 可以控制子元素在交叉轴上的对齐方式
 - 可以控制子元素 缩放比例、排列方式、换行方式、间距等

3。 应用场景
  - 多栏布局
  - 居中


# css3新增了哪些属性（题目十）
1. 选择器： 属性选择器，伪类选择器
2. box-shadow  文本阴影
3. background-clip 背景裁剪
4. transtion 过渡动画
5. transform 2D/3D变换
6. animation 动画
7. 渐变色 linear-gradient

# css3中常见的动画有哪些?怎么实现？(题目十一)
1. transition 过渡动画 当其他属性值发生变更时，控制该值变更所花费的时间以及变更曲线
2. transform 2D/3D变换 用于做容器的旋转、缩放、平移、倾斜
3. animation 动画 控制容器动画的关键帧


# 说说回流和重绘？重排重绘(题目十二)
1. 是什么？
  - 回流：当页面中的元素发生改变，浏览器渲染页面之前需要对结构进行布局计算，需要重新计算元素的位置和几何信息，重新排列页面中的元素
  - 重绘：当页面中的元素发生改变，需要重新绘制元素的样式，重新渲染页面中的元素

2. 触发
 - 回流：只要页面上有容器的几何属性发生变化，就会触发回流
 - 重绘：容器内的非几何属性发生变化，就会触发重绘（字体颜色、背景颜色、边框颜色等）
回流一定会引起重绘，重绘不一定会引起回流

3. 优化
  - 减少回流和重绘次数
  - 使用transform替代top、left等
  - 使用visibility:hidden替代display:none
  - 使用documentFragment进行DOM操作
  - 使用节流和防抖

# 什么是响应式？(题目十三)
1. 是什么？
  - 跟随用户设备尺寸的变化，页面实现自动的适配

2. 实现方式
   - flex 适合做某一个容器的响应式
   - % 适用于页面上的外层大容器
   - rem + 媒体查询 可用于任何地方 ———— 虽然也要写媒体查询，但是每个媒体查询代码量会少很多
   - 媒体查询 适用于页面上的任何地方 ———— 但是代码量会多一些
   - vm/vh 适用于外层大容器 ————相对window的宽高


# 视差滚动效果如何实现？(题目十四)
- 是什么？
  - 多层背景以不同的速度进行移动，实现视觉上的落差

- 实现方式
  - background-attachment: fixed
  - perspective + translateZ

# css画一个三角形？(题目十五)
1. border


# 如何显示一个小于10px的文字？(题目十六)
1.zoom
2.transform: scale(0.5)