# vue 数据流

- 数据流
  - 数据库 todos -> MVC 架构 后端路由 + controller + model
  - MVC是后端的数据流 也就是数据流出
  - 从哪流出，流向哪里
    - 流出：数据库
    - 流向：前端
- HTTP
  - GET /todos 使用后端的MVC 负责数据流出
  - router /todos 负责路由
  - controller todosController 负责处理业务逻辑 select * from todos
  - model 定义了表的结构的抽象 负责数据操作
  - 后端的api接口，返回的是json数据

- 前后端分离
  - 走向api接口化，承接后端传过来的数据
  - vuex vue大型项目，大公司一样，最重要的是财务
    - state, mutations, actions, getters

  - api -> vuex(管理着页面要的数据) -> component

- vue 组件开发难的是设计数据
  - ref/reactive 私有数据
  - props 父组件传递过来的数据
  - coumputed 计算属性，依赖于私有数据和父组件传递过来的数据