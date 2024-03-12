function a() {
  return new Promise((resolve, reject) => {
    resolve()
    // setTimeout(function() {
    //   console.log('a');
    //   reject('ayes')
    // }, 1000)
  })
}

function b() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('b');
      reject('byes')
    }, 500)
  })
}

function c() {
  console.log('c');
}


Promise.allSettled([a(), b()])
.then((s) => {
  console.log(s);
})


// a()
// .then((res) => {
//   console.log(res, 1);
//   return 'aaa'
// })
// .catch((err) => {
//   console.log(err, 2);
// })
// .finally(() => {
//   console.log('finally');
//   return 'hello'
// })
// .then((res) => {
//   console.log(res, 3);
// })


// Promise.any([a(), b()])
// .then((res) => {
//   console.log(res);
// })
// .catch((err) => {
//   console.log(err, '----');
// })


// Promise.all([a(), b()]).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err, '----');
// })


// Promise.race([a(), b()]).then(
//   (res) => {
//     console.log(res);
//     c()
//   },
//   (err) => {
//     console.log(err, 2);
//   }
// )




// a()
// .then(        // return  promise {}
//   (res) => {
//     b()
//     return 123
//   },
//   (err) => {
//     console.log(err);
//     return 123
//   }
// )
// .then((result) => {
//   console.log(result);
// })



// .catch((err) => {
//   console.log(err);
// })

// then
