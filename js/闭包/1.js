var arr=[];

for(let i=0; i<10; i++){
  arr[i]=function(){
    console.log(i);
  }
}


for(var j=0; j<arr.length; j++){
  arr[j]();

  (function(){ // 自执行函数
    arr[i]=function(){
      console.log(i);
  }})(i)
}