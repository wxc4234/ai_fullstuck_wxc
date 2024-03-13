// 用来做响应式
function observe(obj) {
  new Observer(obj);
}

class Observer{
  constructor(value) {
    this.value = value;
    this.walk(value);

  }
  walk(obj) {
    Object.keys(obj).forEach((key) => {
      defineReactive(obj, key, obj[key]);
    })
  }
}

function defineReactive(obj, key, val) {
  const dep = new Dep();
  Object.defineProperty(obj, key, {
    get() {
      dep.addDep() //谁用到了这个key就收集谁
      return val
    },
    set(newVal) {
      if (newVal === val) return;
      // 修改obj.key的值
      // 触发依赖
      dep.notify(); //通知watcher触发依赖
    }
  })
}

// 用来解析指令
class Compiler{
  constructor(el,vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el); // el现在是 '#app'
    if (this.$el) {
      this.compile(this.$el);
    }
  }

  compile(el) {
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach((node) => {
      if (this.isElement(node)) { //是否是一个节点
        console.log('编译元素'+ node.nodeName);
      } else if (this.isInterpolation(node)) { //文本节点
        console.log('编译文本'+ node.textContent);
      }

    })
  }

  isElement(node) {
    return node.nodeType === 1;
  }

  isInterpolation(node) {
    return node.nodeType === 3;
  }
}



class Vue{
  constructor(options) {
    this.$options = options;
    this.$data = options.data;

    observe(this.$data); //将this.$data变成响应式

    proxy(this); //将this.$data代理到this上

    new Compiler(options.el, this);
  }

}

new Vue({
  el: '#app',
  data: function() {
    return {
      a: 1,
    };
  },
  methods: {
  }
})
