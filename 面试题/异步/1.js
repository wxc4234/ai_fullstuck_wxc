function a(cb) {
  return new Promise(function(resolve, reject) {
    setTimeout(function()  {
      console.log('a')
      resolve();
    }, 1000)
  })
}

function b() {
  console.log('b');
}

a().then(() => {
  b();
},
(err) => {
  console.log(err);
});


// .then后面的第二个回调是可以捕获错误的，相当于catch的作用，
// 但是这个catch是在then的第二个回调里面的，所以如果then的第一个回调里面有错误，
// 是捕获不到的，所以一般情况下，我们会在then的第一个回调里面捕获错误，
// 然后在catch里面处理错误，这样就可以捕获到所有的错误了。