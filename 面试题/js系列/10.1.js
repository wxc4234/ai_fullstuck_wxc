function Car(color, speed) {
  this.color = color;
  this.speed = speed;
  this.seat = [1, 2];
}

Truck.prototype = new Car('red', 200);
function Truck() {
  this.container = true;
}

let truck = new Truck()
let truck2 = new Truck()
// truck.color = "white";

truck.seat =  [5,6]

console.log(truck2);
