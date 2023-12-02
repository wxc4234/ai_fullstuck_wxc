function a() {
  setTimeout(() => {
    console.log('A');
    b(); //回调函数
  },1000)
}
function b() {
  console.log('B');
}
a();
