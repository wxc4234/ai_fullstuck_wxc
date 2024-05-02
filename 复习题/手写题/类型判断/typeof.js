// function myTypeof(value) {
//   if (value === null) return 'object';

//   let s= Object.prototype.toString.call(value)
//   return s.slice(8,-1);
// }

function myTypeof(value) {
  if (value === null) return 'object';
  let s = Object.prototype.toString.call(value);
  return s.slice(8, -1).toLowerCase();
}


console.log(myTypeof(42));

