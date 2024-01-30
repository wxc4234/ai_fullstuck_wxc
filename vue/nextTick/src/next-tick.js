
export function myNextTick(fn) {
  let app=document.getElementById('app')
 var observerOptions = {
    childList: true, // 观察目标子节点的变化，是否有添加或者删除
    attributes: true, // 观察属性变动
    subtree: true, // 是否将观察器应用于该节点的所有后代节点
  }

  // 让fn()在DOM更新后执行
  // 创建一个DOM监听器
  let observer = new MutationObserver((el) => {
    // 当被监听的DOM更新完成时，会执行这里的回调函数
    console.log(el);
    fn();

  })
  observer.observe(app, observerOptions) //监听某个DOm节点及其子节点
}