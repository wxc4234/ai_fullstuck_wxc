import { track, trigger } from "./effect.js";


const get = createGetter(); // 创建一个get函数
const set = createSetter(); // 创建一个set函数

function createGetter() {
  return function get(target, key, receiver) {
    // console.log('target被读取值');
    const res = Reflect.get(target, key, receiver); // 获取源对象中的键值
    // 这个属性究竟还有哪些地方用到了，（副作用函数的收集，computed,watch...）
    track(target, key); // 依赖收集


    return res;
  }
}

function createSetter() {
  return function set(target, key, value, receiver) {
    // console.log('target被设置值', key, value);
    const res = Reflect.set(target, key, value, receiver); // 设置源对象中的键值 === target[key] = value

    trigger(target, key); // 触发副作用函数
    // 需要记录下来此时是哪一个key的值变更了，再去通知其他依赖该值的函数生效，更新浏览器的视图(响应式)
    // 触发被修改的属性身上的副函数 依赖收集（被修改的key在哪些地方被使用了）发布订阅


    return res;
  }
}


export const mutableHandlers = {
  // get: function (target, key, receiver) { // target 被代理的源对象，key是源对象中的键，receiver是代理后对象
  //   console.log('target被读取值');
  //   const res = Reflect.get(target, key, receiver); // 获取源对象中的键值
  //   return res;
  // },
  get,
  set,
  // set: function (target, key, value, receiver) {
  //   console.log('target被设置值', key, value);
  //   const res = Reflect.set(target, key, value, receiver); // 设置源对象中的键值 === target[key] = value
  //   return res;
  //   // 更新浏览器的视图(响应式)
  // },
}