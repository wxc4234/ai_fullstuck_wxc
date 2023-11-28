// 到达定时器后，到底做了什么 函数放到队列中,事件循环(event loop)
//如何将1000ms的输出在hello之前

setTimeout(function () {
  // console.log('1000ms以后');
}, 1000)
const p = new Promise((resolve, reject) =>
{
  console.log('实例化promise');
  // 异步任务
   setTimeout(() => {
     console.log('定时器运行');
     resolve();//运行成功
  },1000)
}); //实例化一个promise对象
// console.log('hello');
// console.log(p.__proto__);
p.then(function ()  {
  console.log('1000ms后运行，hello world');
})