function foo(){
  var myName= 'am'
  let test1 =1
  const test2 =2


  var innerBar={
    getName: function(){
      console.log(test1);
      return myName
    },

    setName: function(newName){
      myName=newName
    }
  }
  return innerBar;
}

var bar =foo();