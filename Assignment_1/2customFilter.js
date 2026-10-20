"use strict";

function customFilter(arr, callback) {
   if (!Array.isArray(arr)) {
    throw new TypeError("Arr must be a Array");
  }
  if (typeof callback !== "function") {
    throw new TypeError("callback must be a function");
  }
  const length = arr.length;
  const newArr = [];
  for (let index = 0; index < length; index++) {
    if (!(index in arr)||!callback(arr[index])) continue
      newArr.push(arr[index]);
  }

  return newArr;
}

const users = [
  { name: "osama1", age: 18 },
  { name: "osama2", age: 17 },
  { name: "osama3" },
  { name: "osama4", age: 22 },
];

console.log(
  customFilter(users, function (x) {
    return x.age >= 18;
  }),
);

console.log(
  users.filter( function (x) {
    return x.age >= 18;
  }),
);


