function test(){
  let count=0;
  function help(){
    console.log(++count);
  }
  
  return help
}

var res=test()
res()
res()
res()