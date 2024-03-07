// 红灯每个三秒亮一次，黄灯每两秒亮一次，绿灯每一秒亮一次；

function red() {
  console.log("红灯亮");
}
function yellow() {
  console.log("黄灯亮");
}
function green() {
  console.log("绿灯亮");
}

function light(callback,wait) {
  return function((resolve) => {
    setTimeout(() => {
      callback();

    },wait)
  })
}



light();