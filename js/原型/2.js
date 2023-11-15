Car.prototype.height = 1400;
Car.prototype.lang = 4900;
Car.prototype.name = 'BMW';
function Car(owner,color){
    // this.name = "BMW";
    // this.lang = 4900;
    // this.height = 1400;
    this.owner = owner;
    this.color = color;
}
let car = new Car('万总','red');
console.log(car.name);