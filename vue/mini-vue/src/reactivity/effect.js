const targetMap = new WeakMap();
let activeEffect = null; //得是一个副作用函数

export function effect(fn,options={}) { //watch,computed的核心逻辑
  const effectFn = () => {
    try {
      activeEffect = effectFn
      return fn()
    } finally {
      activeEffect = null
    }

  }
  if(!options.lazy){
    effectFn()
  }
  return effectFn
}

// 为某个属性添加effect
export function track(target,key) {
  // targetMap = { //存成这样的结构
  //   target: {
  //     key: [effect1,effect2,...]
  //   }
  // }

  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }
  let dep = depsMap.get(key)
  if (!dep) { //改属性未添加过effect
    dep = new Set()
  }
  if (!dep.has(activeEffect) && activeEffect) {
    // 存入一个effect函数
    dep.add(activeEffect)
  }
  depsMap.set(key, dep)

}

// 触发属性effect
export function trigger(target,key) {
  const depsMap = targetMap.get(target)
  if(!depsMap){ //当前对象中所有的key都没有副作用函数，从来都没有被使用过
    return
  }
  const deps = depsMap.get(key)
  if (!deps) { //这个属性没有依赖
    return
  }

  deps.forEach(effectFn => {
    effectFn() //将该属性上的所有副作用函数全部触发
  });
}