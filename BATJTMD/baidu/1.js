// es6 类
// 类和对象有什么区别
// 类是抽象的，定制的 在程序中不运行
// 对象是具体的
class SingleDog{
  constructor(){

  }
  // 静态方法属于类上的方法
  static getInstance(){
    // console.log('类的方法');
    // 返回实例
    if(!SingleDog.instance){
      // 仅实例化一次
      SingleDog.instance = new SingleDog();
    }
    return SingleDog.instance;
  }
  // 公有方法 属于实例上的
  show(){
    console.log('单身贵族');
  }
}
// 设计模式  一个类只实例化一次 封装  第一次new，不实例化，直接返回实例
// 通过new的角度搞不定
// 在编程世界只有一个总领导 弹窗
const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()
// console.log(s1===s2);//False 它们在内存中不一样

console.log(SingleDog.getInstance());