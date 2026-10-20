"use strict";

function memoize(fun) {
  if (typeof fun !== "function") {
    throw new TypeError("must be a function");
  }
  const cache = {};
  return function (key) {
    if (cache[key]) {
      console.log("from cache");
      return cache[key];
    }
    cache[key] = fun(key);
    return cache[key];
  };
}

const res = memoize(function (key) {
  console.log("calculating");
  return key * key;
});

console.log(res(10));

console.log(res(6));
console.log(res(10));
console.log(res(6));
