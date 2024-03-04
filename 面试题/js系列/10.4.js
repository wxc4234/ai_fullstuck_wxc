let parent = {
  name: 'Tom',
  firends: ['foo', 'bar', 'baz'],
  age() {
    return 18;
  }
}

let child = Object.create(parent);
let child2 = Object.create(parent);

child.firends.push('wxc');

console.log(child2.firends);