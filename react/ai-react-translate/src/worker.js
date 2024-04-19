import { pipeline } from "https://cdn.jsdelivr.net/npm/@xenova/transformers@2.6.0";

// 新的线程，不能做DOM编程，没有this，只有self
// 监听message事件 ，使用 postMessage 发送消息
self.addEventListener("message", async (event) => {
  console.log(event);
  self.postMessage({
    status: ' complete',
    output: 'ddd'
  })
});
