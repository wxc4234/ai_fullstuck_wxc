function timeout(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

class SuperTask{
  constructor(paralleCount = 2) {
    this.tasks = [] // 装并发的任务
    this.paralleCount = paralleCount
    this.runningCount = 0 // 正在运行中的任务
  }
  add(task) {
    return new Promise((resolve, reject) => {
      this.tasks.push({
        task,
        resolve,
        reject
      })
      this._run()
    })
  }
  _run() { // 一个任务结束后会立即执行下一个任务
    if (this.runningCount < this.paralleCount && this.tasks.length) {
      this.runningCount++
      const { task, resolve, reject } = this.tasks.shift() // 取出第一个任务
      // 当第一个任务执行完毕，then中的第一个回调出发了，add后面then中的回调就能触发
      task().then(resolve, reject).finally(() => { // 有一个任务执行完毕了
        this.runningCount--
        this._run()
      })
    }

  }
}

const superTask = new SuperTask(2)


// 向任务调度器中添加任务
function addTask(time, num) {
  superTask
    .add(() => timeout(time))
    .then(() => {
      console.log(`任务${num}完成`);
    })
}


addTask(10000, 1) // 1被添加 立即执行 开始倒计时
addTask(5000, 2)  // 2被添加 立即执行 开始倒计时
addTask(3000, 3)  // 3被添加 5s后2被释放 3才触发
addTask(4000, 4)  // 4被添加 2s后3被释放 4才触发
addTask(5000, 5)  // 5被添加 2s后1被释放 5才触发