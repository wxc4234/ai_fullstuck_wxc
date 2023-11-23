Car.prototype.run = function () { 
  console.log('running');
}
Car.add = function () { 
  console.log('加油中');
}
function Car() {
  this.name = 'car';
}