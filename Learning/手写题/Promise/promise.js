function myPromise(fn) {
  this.state = "pending";
  this.value = null;
  this.reason = null;
  this.onFulfilled = [];
  this.onRejected = [];

  const resolve = (value) => {
    if (this.state === "pending") {
      this.state = "fulfilled";
      this.value = value;
      this.onFulfilled.forEach((callback) => callback(this.value));
    }
  };

  const reject = (reason) => {
    if (this.state === "pending") {
      this.state = "rejected";
      this.reason = reason;
      this.onRejected.forEach((callback) => callback(this.reason));
    }
  };
  try {
    fn(resolve, reject);
  } catch (err) {
    console.log(err);
  }
}

myPromise.prototype.then = function (onFulfill, onReject) {
  onFulfill = typeof onFulfill === "Function" ? onFulfill : (value) => value;
  onReject =
    typeof onReject === "Function"
      ? onReject
      : (reason) => {
          throw reason;
        };
  if (this.state === "pending") {
    return new myPromise((resolve, rejected) => {
      this.onFulfilled.push((value) => {
        setTimeout(() => {
          try {
            const result = onFulfill(value);
            resolve(result);
          } catch (err) {
            throw err;
          }
        });
      });

      this.onRejected.push((reason) => {
        setTimeout(() => {
          try {
            const result = onReject(reason);
            rejected(result);
          } catch (err) {
            throw err;
          }
        });
      });
    });
  }

  if (this.state === "fulfilled") {
    return new myPromise((resolve, reject) => {
      this.onFulfilled.push((value) => {
        setTimeout(() => {
          try {
            const result = onFulfill(value);
            resolve(result);
          } catch (err) {
            reject(err);
          }
        });
      });
    });
  }

  if (this.state === 'rejected') {
    return new myPromise((resolve, reject) => {
      this.onRejected.push((reason) => {
        setTimeout(() => {
          try {
            const result = onReject(reason)
            reject(reason)
          } catch (err) {
            throw(err)
          }
        })
      })
    })
  }
};

myPromise.prototype.catch = function (onCatch) {
  return this.then(null, onCatch);
}

myPromise.prototype.finally = function (onFinally) {
  return this.then(
    (value) => myPromise.resolve(onFinally()).then(() => value),
    (reason) => myPromise.rejected(onFinally()).catch(()=>{throw(reason)})
  )
}

const a = new Promise((resolve, reject) => {
  // resolve('ok')
  // function a (){console.log('A');}
  reject("err");
});

a.then((res) => {
  console.log(res);
})
  .catch((err) => {
    // err()
    console.log(err);
  })
  .finally(() => {
    console.log("finally");
  });

