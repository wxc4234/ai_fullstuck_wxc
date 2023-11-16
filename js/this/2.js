// var a=1;
// function foo(){
//   console.log(this.a);
// }
// foo(); // 函数在哪里调用的，this就指向谁

// function bar(){
//   var a=2
//   foo();//this指向window
//   // bar的词法作用域是window，foo()是在bar的作用域中调用的，但是必须要知道bar的词法作用域是谁
// }
// bar();

var b=2;
function foo(){
  var b=1;
  function bar(){
    console.log(this);
  }
  bar()
}
foo()