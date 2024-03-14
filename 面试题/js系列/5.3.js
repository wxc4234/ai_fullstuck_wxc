let obj = {
  a: 1,
  b: {
    c: 2
  },
  d:undefined,

}

// const obj2 = structuredClone(obj);
// structuredClone方法是一个异步方法，所以我们需要使用Promise来获取返回值，返回的是一个新的对象，不会受原对象的影响。


function deepClone(obj) {
  return new Promise((resolve) => {
    const { port1, port2 } = new MessageChannel();
    port1.postMessage(obj);
    port2.onmessage = (msg) => {
      resolve(msg.data);
    }
  })
}

let obj2 = null;
deepClone(obj).then((res) => {
  console.log(res);
  obj2 = res;
  obj.b.c = 3;
  console.log(obj2);
})

