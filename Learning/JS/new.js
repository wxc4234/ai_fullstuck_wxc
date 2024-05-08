function myNew(fn,...arg) {
  let obj = {};
  obj = Object.create(fn.prototype)
  fn.call(obj, ...arg);
  return obj
}