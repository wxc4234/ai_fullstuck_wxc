// LRU需要用到的节点，使用链表方便插入删除
// 内存是分散的
// Hash表，key=>value
class ListNode{
  constructor(key, val) {
    this.key = key; // 为了方便删除, O(1) key => node
    this.val = val;// value
    this.pre = null;// pre节点
    this.next = null;// next节点
  }
}

class LRUCache{
  constructor(capacity) {
    this.capacity = capacity; // 容量
    this.size = 0; // 当前大小
    this.data = {}; //hashmap Map 以O(1)的时间复杂度找到节点
    this.head = new ListNode(); // 头节点
    this.tail = new ListNode(); // 尾节点
    this.head.next = this.tail; // 头节点指向尾节点,空的头尾节点
    this.tail.pre = this.head; // 尾节点指向头节点
  }
  put(key,val) {
    if (!this.data[key]) { // 如果不存在
      //new
      let node = new ListNode(key, val); // 创建新节点
      this.data[key] = node; // 存入hash表
      // head 指针指向的节点就是最近最少使用的节点
      this.appendHead(node); // 添加到头部
      this.size++; // 大小加1
      if(this.size > this.capacity) {
        // 删除最近最少使用的节点
        const lastKey = this.removeTail(); // 删除最后一个节点
        delete this.data[lastKey]; // 删除hash表中的值
        this.size--; // 大小减1
      }
    } else {
      // update
      let node = new ListNode(key, val); // 创建新节点
      this.data[key].val = val; // 更新值
      this.removeNode(node); // 移动到头部
      node.val = val;
      this.appendHead(node);
    }
  }
  get(key) {
    if (!this.data[key]) return -1; // 如果不存在返回-1
    else {
      let node = this.data[key]; // 获取节点
      this.removeNode(node); // 移动到头部
      this.appendHead(node);// 添加到头部
      return node.val; // 返回值
    }
  }
  appendHead(node) {
    let firstNode = this.head.next; // 获取头节点的下一个节点
    this.head.next = node; // 头节点指向新节点
    node.pre = this.head; // 新节点的pre指向头节点
    node.next = firstNode; // 新节点的next指向头节点的下一个节点
    firstNode.pre = node; // 头节点的下一个节点的pre指向新节点
  }
  removeTail() {
    let key = this.tail.pre.key; // 获取尾节点的key
    this.removeNode(this.tail.pre); // 删除尾节点的前一个节点
    return key; // 返回尾节点的key  为了删除hash表中的值
  }
  removeNode(node) {
    let preNode = node.pre; // 获取前一个节点
    let nextNode = node.next; // 获取后一个节点
    preNode.next = nextNode; // 前一个节点的next指向后一个节点
    nextNode.pre = preNode; // 后一个节点的pre指向前一个节点
  }
}