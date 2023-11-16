// var foo =function(){}

// var obj ={
//   a:1
// }
// //箭头函数里面没有this，所以this指向的是外层的this
// var foo = () =>{
//   console.log(this.a)
// }
// foo.call(obj)

// var bar=function(){
//   console.log(this.a)
// }
// bar.call(obj)

var obj ={
  a:1
}
function foo(){
  var bar=()=>{
    console.log(this)
  }
  bar()
}
foo.call(obj)