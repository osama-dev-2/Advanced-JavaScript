"use strict";

function flattenArray(arr) {
    if (!Array.isArray(arr)) {
    throw new TypeError("Arr must be a Array");
  }
  const length = arr.length;
  const newArr = [];
  for (let index = 0; index < length; index++) {
    if (!(index in arr)) continue;
    if (Array.isArray(arr[index])) {
      const nest = flattenArray(arr[index]);
      const length_nest = nest.length;
      for (let index_nest = 0; index_nest < length_nest; index_nest++) {
        if (!(index_nest in nest)) continue;
        newArr.push(nest[index_nest]);
      }
      continue;
    }
    newArr.push(arr[index]);
  }
  return newArr;
}

const arr = [1, , null, [2, 6, 7, [3, , [4, ,]]]];
const newArr=flattenArray(arr);
console.log(newArr);

