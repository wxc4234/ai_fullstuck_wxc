function myPromise(fn) {
  this.state = "pending";
  this.value = null;
  this.reason = null;
  this.onFulfilled = [];
  this.onRejected = [];

  const resolve = (value) => {
    if (this.state === 'pending') {
      this.state = 'fulfilled';
      this.value = value;
      this.onFulfilled.forEach(callback=> callback(this.value))
    }
  }

  const reject = (reason) => {
    if (this.state === 'pending') {
      this.state = 'rejected';
      this.reason = reason;
      this.onRejected.forEach(callback => callback(this.reason));
    }
  }
  try {
    fn(resolve, reject);
  } catch (err) {
    console.log(err);
  }
}