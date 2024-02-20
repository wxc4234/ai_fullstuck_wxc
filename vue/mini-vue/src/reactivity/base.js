let obj = {
  name : 'Tom',
  get age() {
    return 18
  },
  set age(newVal) {
    console.log('newVal', newVal);
  }

}
obj.age = 19
// console.log(obj.age); //js中的对象有getter和setter方法