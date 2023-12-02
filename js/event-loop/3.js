console.log('stard');
async function async1() {
  await async2() // 浏览器会给await提速
  console.log('saync1 end');// 被await挤入微任务队列
}
async function async2() {
  console.log('saync2 end');
}
async1()
setTimeout(function() {
  console.log('setTimeout');
}, 0)
new Promise((resolve) => {
  console.log('promise');
  resolve()
})
.then(() => {
  console.log('then1');
})
.then(() => {
  console.log('then2');
})
console.log('end');

// stard saync2 end  promise end  saync1 end then1 then2 setTimeout
