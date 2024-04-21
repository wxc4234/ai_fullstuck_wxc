class EventEmitter {
  constructor() {
    this.event = {};
  }

  on(Event, fn) {
    if (!this.event[Event]) {
      this.event[Event] = [];
    }
    this.event[Event].push(fn);
  }

  emit(Event) {
    this.event[Event].forEach((fn) => {
      fn();
    });
  }

  off(Event, fn) {
    console.log(this.event[Event]);
    if (this.event[Event].indexOf(fn) !== -1) {
      this.event[Event].splice(this.event[Event].indexOf(fn), 1);
    }
  }
}

let emiter = new EventEmitter();

function A() {
  console.log("A");
}

emiter.on("click", A);

emiter.off("click", A);

function B() {
  console.log("B");
}
emiter.on("click", B);

emiter.emit("click");
