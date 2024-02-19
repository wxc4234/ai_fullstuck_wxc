import { mutableHandlers } from "./baseHandlers.js";

export const reactiveMap = new WeakMap(); // 创建一个WeakMap用来存储已经代理过的对象,WeakMap对内存的回收更加友好

export function reactive(target) {
  // 将target变成响应式对象
  return createReactiveObject(target, reactiveMap, mutableHandlers); // 创建响应式对象
}

export function createReactiveObject(target, proxyMap, proxyHandlers) {
  // 创建响应式的函数,参数分别是目标对象,存储代理对象的map,代理对象的处理函数
  // 判断target是不是引用类型
  if (typeof target !== "object" || target === null) {
    // 不是引用类型直接返回
    return target;
  }

  // 该对象是否已经被代理过(已经是响应式对象)
  const existingProxy = proxyMap.get(target); // 从reactiveMap中获取target
  if (existingProxy) {
    return existingProxy; // 如果已经代理过了,直接返回
  }
  // 执行代理操作(将target变成响应式对象)
  const proxy = new Proxy(target, proxyHandlers); //第二个参数：当target被读取值，设置值，判断值等等操作时，会触发的函数


  // 往 reactiveMap中增加 proxy,把已经代理过的对象存储起来
  proxyMap.set(target, proxy);
  return proxy; // 返回代理对象
}
