class myPromise {
  constructor(executor) {
    this.state = "pending"; // pending, fulfilled, rejected
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = []; // then的回调
    this.onRejectedCallbacks = []; // catch的回调

    const resolve = (value) => {
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        // then的回调在这里触发
        this.onFulfilledCallbacks.forEach((callback) => callback(value));
      }
    };
    const reject = (reason) => {
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
        // catch的回调在这里触发
        this.onRejectedCallbacks.forEach((callback) => callback(reason));
      }
    };
    executor(resolve, reject);
  }

  then(onFulfilled, onRejected) {
    onFulfilled =
      typeof onFulfilled === "function" ? onFulfilled : (value) => value;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : (reason) => {
            throw reason;
          };

    const newPromise = new myPromise((resolve, reject) => {
      // 考虑onFulfilled和onRejected
      if (this.state === "fulfilled") {
        //then前面的对象状态已经变更完成
        setTimeout(() => {
          //模拟异步，但是模拟不了微任务
          try {
            const result = onFulfilled(this.value);
            resolve(result);
          } catch (e) {
            reject(e);
          }
        });
      }

      if (this.state === "rejected") {
        setTimeout(() => {
          try {
            const result = onRejected(this.reason);
            resolve(result);
          } catch (e) {
            reject(e);
          }
        });
      }

      if (this.state === "pending") {
        this.onFulfilledCallbacks.push((value) => {
          setTimeout(() => {
            try {
              const result = onFulfilled(value);
              resolve(result);
            } catch (e) {
              reject(e);
            }
          });
        });

        this.onRejectedCallbacks.push((reason) => {
          setTimeout(() => {
            try {
              const result = onRejected(reason);
              resolve(result);
            } catch (e) {
              reject(e);
            }
          });
        });
      }
    });

    return newPromise;
  }
  catch(onRejected) {
    return this.then(null, onRejected);
  }

  // 接收一个数组，数组中的promise对象谁先发生状态变更，race就跟着变更状态
  static race(promises) {
    return new myPromise((resolve, reject) => {
      promises.forEach((promise) => {
        // promise 的状态是不是fulfilled
        promise.then(
          (value) => {
            resolve(value);
          },
          (reason) => {
            reject(reason);
          }
        );
      });
    });
  }

  static all(promises) {

  }
}
