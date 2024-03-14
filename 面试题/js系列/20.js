console.log(1);

let a = 2;
console.log(a);

setTimeout(() => {
  a = 3;
}, 1000)

console.log(a);

function fn() {
  console.log('hello world!');
}

setImmediate(fn);