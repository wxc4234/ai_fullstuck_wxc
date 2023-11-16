function foo(x,y){
  console.log(this.a,x+y);
}
var obj = {
  a: 1,
};
// foo.call(obj,4,5)
// foo.apply(obj,[4,5]) //接收参数需要使用数组接收
let bar=foo.bind(obj,4,5)() //返回一个函数，需要手动调用
