function MyPromise(fn) {
  this.state = 'pending';
  this.value = null;
  this.reason = null;
  this.onResolvedCallbacks = [];
  this.onRejectedCallbacks = [];

  const resolve = (value) => {
    if (this.state === 'pending') {
      this.state = 'fulfilled';
      this.value = value;
      this.onResolvedCallbacks.forEach(callback => callback(this.value));
    }
  }

  const reject = (reason) => {
    if (this.state === 'pending') {
      this.state = 'rejected';
      this.reason = reason;
      this.onRejectedCallbacks.forEach(callback => callback(this.reason));
    }
  }

  try {
    fn(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
  onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

  if (this.state === 'fulfilled') {
    return new MyPromise((resolve, reject) => {
      setTimeout(() => {
        try {
          const result = onFulfilled(this.value);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }, 0);
    });
  }

  if (this.state === 'rejected') {
    return new MyPromise((resolve, reject) => {
      setTimeout(() => {
        try {
          const result = onRejected(this.reason);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      }, 0);
    });
  }

  if (this.state === 'pending') {
    return new MyPromise((resolve, reject) => {
      this.onResolvedCallbacks.push(value => {
        setTimeout(() => {
          try {
            const result = onFulfilled(value);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        }, 0);
      });

      this.onRejectedCallbacks.push(reason => {
        setTimeout(() => {
          try {
            const result = onRejected(reason);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        }, 0);
      });
    });
  }
};

MyPromise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected);
};

MyPromise.prototype.finally = function(onFinally) {
  return this.then(
    value => MyPromise.resolve(onFinally()).then(() => value),
    reason => MyPromise.resolve(onFinally()).then(() => { throw reason; })
  );
};

// 测试代码
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功');
    // reject('失败');
  }, 1000);
});

promise
  .then(value => {
    console.log('成功:', value);
    return 'then 返回的新值';
  })
  .catch(reason => {
    console.log('失败:', reason);
    return 'catch 返回的新值';
  })
  .finally(() => {
    console.log('不管成功或失败都会执行的逻辑');
  });
