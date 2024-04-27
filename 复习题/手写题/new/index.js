function myNew(obj,...arg) {
  let newObj = {};
  newObj = obj.create(obj.prototype)
  newObj.apply(obj, arg);
  return newObj
}