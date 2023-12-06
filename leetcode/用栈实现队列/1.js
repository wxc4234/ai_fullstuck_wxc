// 队列的数据存储结构
const MyQueue = function () {
  this.statck1 = [];
  this.statck2 = [];

}
// 行为
MyQueue.prototype = {
  push: function (x) {

    this.statck1.push(x);
  },
  // FIFO
  pop: function () {// 从队列首部移除元素
    // 如果statck2为空，将statck1的元素pop到statck2中
    if (this.statck2.length <= 0) {
      while (this.statck1.length !== 0) {
        this.statck2.push(this.statck1.pop());// 将statck1的元素pop到statck2中
      }
    }
    return this.statck2.pop();// 如果statck2不为空，直接pop
  },
  // 拿到front的值
  peek: function () {
    if (this.statck2.length <= 0) {
      while (this.statck1.length !== 0) {
        this.statck2.push(this.statck1.pop());// 将statck1的元素pop到statck2中
      }
    }
    const stack2Len = this.statck2.length;
    return stack2Len && this.statck2[stack2Len - 1];// 如果statck2不为空，直接pop
  },
  // 判断队列是否为空
  empty: function () {
    return !this.statck1.length && !this.statck2.length; //如果statck1和statck2都为空，队列为空
  }
}