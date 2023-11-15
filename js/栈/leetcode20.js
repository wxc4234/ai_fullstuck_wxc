var str='([{}])'


function isValid(s){
  const obj ={
    '{':'}',
    '[':']',
    '(':')'
  }

  const stack=[];
  const len=s.length;

  for (let i=0; i<len; i++){
    if(s[i] ==='('||s[i] ==='['||s[i] ==='{'){
      stack.push(s[i])
    }else { // 取到右括号
      if(obj[stack.pop()]!==s[i]){
        return false;
      }
    }
  }
  return !stack.length;
}
console.log(isValid(str));