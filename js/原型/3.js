Car.prototype.height = 1400;
Car.prototype.lang = 4900;
Car.prototype.name = 'BMW';
function Car(owner,color){
    this.owner = owner;
    this.color = color;
}
let car = new Car('万总','red');
let car2= new Car('wxc','pink');
// car.name='Benz'
delete Car.prototype.name;
console.log(car.name);