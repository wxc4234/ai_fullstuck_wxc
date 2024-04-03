class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(eventName, callback) {
    // {'onSell' : cb}
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }
  emit(eventName) {
    if (this.events[eventName]) {
      this.events[eventName].forEach((cb) => {
        cb();
      });
    }
  }
  off(eventName, cb) {
    const handles = this.events[eventName];
    const index = handles&&handles.indexOf(cb);
    if (index !== -1) {
      handles.splice(index, 1);
    }
  }

  once(eventName, cb) {
    if(this.events[eventName] && this.events[eventName].length > 0) {
      return
    }
    this.on(eventName, cb)
  }
}
const emiter = new EventEmitter();

function wan() {
  console.log("万总去买房");
}

emiter.on("onSell", wan);

// emiter.off("onSell", wan)

function wu() {
  console.log("吴总去买房");
}

emiter.once("onSell", wu);

emiter.once("onSell", wu);

emiter.once("onSell", wu);
setTimeout(() => {
  emiter.emit("onSell");
}, 1000);
