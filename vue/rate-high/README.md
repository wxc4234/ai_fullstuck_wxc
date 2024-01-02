- 前端全栈 vue 年前正式面试
- ai 岗位 绘画

- 写vue 项目核心是什么
  - 组件 评分组件
  - 显示和数据
  - 加一项功能 ，要能够点击星星评分，click
  - 鼠标经过 显示星星

- rate 组件
  - 他是一个基本每个电商项目都有的组件，通用组件
  - vue 开发要忠于数据，数据驱动
      父组件传递数据value给子组件，rate组件 mouseover mouseout 私有数据 width 来驱动，当click打完分后，需要汇报给父组件
      父组件和子组件状态的统一
  - props + emit
    - 子组件不可以直接修改props的值，
    - vue数据除model外，都是单向数据流，父组件传递给子组件，子组件不能修改，只能通过emit事件，通知父组件修改
    - 如果要改，要遵守流程，就是emit
    - 父组件会以自定义事件的方式，定义一个事件，并接受传参，同步状态
      @update-rate="update"
    - 子组件通过defineEmits(['update-rate']) 声明事件 emits数组