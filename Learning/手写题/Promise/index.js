function myPromise(fn) {
  this.state = "pending";
  this.value = null;
  this.reason = null;
  this.resCallback = [];
  this.rejCallback = [];

  const resolve = (value) => {
    if (this.state === "pending") {
      this.state = "fulfilld";
      this.value = value;
      this.resCallback.forEach((callback) => callback(this, value));
    }
  };

  const reject = (reason) => {
    if (this.state === "pending") {
      this.state = "rejected";
      this.reason = reason;
      this.rejCallback.forEach((callback) => callback(this.reason));
    }
  };

  try {
    fn(resolve, reject);
  } catch (error) {
    reject(error);
  }

  myPromise.prototype.then = function (onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "Function" ? onFulfilled : (value) => value;
    rejCallback =
      typeof onRejected === "Function"
        ? onRejected
        : (reason) => {
            throw reason;
          };
    // 这是因为 .then 方法需要返回一个新的 Promise，这个新的 Promise 的状态和值取决于 onFulfilled 或 onRejected 的返回值。
    // 如果 onFulfilled 或 onRejected 不是函数，那么我们就没有返回值，这会打断 Promise 链。
    // 对于 onFulfilled，我们提供的默认函数 value => value 是一个恒等函数，它会直接返回接收到的值。
    // 这样，即使用户没有提供 onFulfilled 函数，我们也能从上一个 Promise 得到一个值，然后传递给下一个 Promise。
    // 对于 onRejected，我们提供的默认函数 reason => { throw reason } 会直接抛出接收到的错误。
    // 这样，即使用户没有提供 onRejected 函数，我们也能把错误传递给下一个 Promise，让它有机会处理这个错误。

    if (this.state === "pending") {
      return new myPromise((resolve, reject) => {
        this.resCallback.push((value) => {
          setTimeout(() => {
            try {
              const result = onFulfilled(value);
              resolve(result);
            } catch (err) {
              reject(err);
            }
          }, 0);
        });

        this.rejCallback.push((reason) => {
          setTimeout(() => {
            try {
              const result = onRejected(reason);
              resolve(result);
            } catch (err) {
              reject(err);
            }
          }, 0);
        });
      });
    }

    if (this.state === "fulfilled") {
      return new myPromise((resolve, reject) => {
        setTimeout(() => {
          try {
            const result = onFulfilled(this.value);
            resolve(result);
          } catch (err) {
            reject(err);
          }
        }, 0);
      });
    }

    if (this.state === "rejected") {
      return new myPromise((resolve, reject) => {
        setTimeout(() => {
          try {
            const result = onRejected(this.reason);
            resolve(result);
          } catch (err) {
            reject(err);
          }
        });
      });
    }
  };

  myPromise.prototype.catch = function (onCatched) {
    return this.then(null, onCatched);
  };

  myPromise.prototype.finally = function (onFinally) {
    return this.then(
      (value) => myPromise.resolve(onFinally()).then(() => value),
      (reason) =>
        myPromise.reject(onFinally()).catch(() => {
          throw reason;
        })
    );
  };
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
