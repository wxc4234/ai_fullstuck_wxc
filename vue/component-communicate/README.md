# vue 组件通信

## 父子组件通信
  - 父组件v-bind绑定一个属性用于传值，子组件通过props属性接收父组件绑定的属性。不要去尝试修改props属性的值，因为改了也不会影响到父组件的值。因为props属性是单向数据流，只能从父组件流向子组件，不能反过来。

## 子父组件通信
  - 父组件订阅一个事件，子组件通过$emit去发布这个事件，让父组件的订阅生效

## 兄弟组件通信
  - npm install vuex --save
  -