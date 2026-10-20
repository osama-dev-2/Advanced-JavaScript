"use strict";

function createEventEmitter() {
  const events ={};

  return {
    on: function (eventkey, callback) {
      if (typeof callback !== "function") {
        throw new TypeError("must be a function");
      }
      events[eventkey]=callback;
    },
    emit: function (eventkey, data) {
     if (!Object.hasOwn(events, eventkey)) {
      throw new TypeError(`${eventkey} is undefined`)
    
     }
        events[eventkey](data);
    },
  };
}

const emitter = createEventEmitter();

emitter.on("login", function (data) {
  console.log("welcome:", data.name);
});

emitter.emit("login", { name: "osama" });

emitter.emit("logout", { name: "ali" });