"use strict";

function once(fun) {
  if (typeof fun !== "function") {
    throw new TypeError("must be a function");
  }
  let one_call = false;
  return function () {
    if (!one_call) {
      one_call = true;
      return fun();
    }
  };
}

function test() {
  console.log("تم التنفيذ");
}

const init = once(test);
init();
init();
