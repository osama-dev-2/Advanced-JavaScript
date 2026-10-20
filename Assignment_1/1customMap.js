"use strict";

function customMap(arr, callback) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Arr must be a Array");
  }
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function");
  }

  const length = arr.length;
  const newArr = [];
  for (let index = 0; index < length; index++) {
    if (!(index in arr)) continue;
    newArr[index] = callback(arr[index]);
  }
  return newArr;
}

const num = [, 2, 5, , undefined, null, 6];
console.log(
  customMap(num, function (x) {
    return x * 2;
  }),
);

console.log(
  num.map(function (x) {
    return x * 2;
  }),
);
