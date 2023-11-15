// function foo(){
//      c=3  //c被编译声明为全局变量
// }
// foo()

// console.log(c);



// let str='123strstr';
// str=str.replace(/str/g,'456');
// console.log(str);

// let str1='123str,str789';

// let str2=str1.replace(/str/,function(){
//      console.log(arguments);
//      return '456';
// });

// console.log(str2);

let str1='张三:3百。 李四:400。 王五:500。 赵六:6百。'
let str2=str1.replace(/(\d+)(百)/g,function(){
     console.log(arguments);
     return arguments[1]+'00';
});
console.log(str2);