"use strict";
function customReduce(arr, callback, startval) {
   if (!Array.isArray(arr)) {
    throw new TypeError("Arr must be a Array");
  }
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function");
  }
  const length = arr.length;
  let hasStartval = arguments.length > 2;
  for (let index = 0; index < length; index++) {
    if (!(index in arr)) continue;
    if (hasStartval) {
      startval = callback(startval, arr[index]);
      continue;
    }
    startval = arr[index];
    hasStartval = true;
  }
  return startval;
}

const num = [, 2, 5, , undefined, null, 6];
const res = customReduce(num, (acc, current) => acc + current, 12);
console.log(res);


const result = num.reduce((acc, current) => {
  return acc + current;
}, 12);

console.log(result);
