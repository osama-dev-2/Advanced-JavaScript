"use strict";

function groupBy(arr, by) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Arr must be a Array");
  }
  const length = arr.length;
  const newUsers = {};
  for (let index = 0; index < length; index++) {
    //  console.log(arr[index][by]);
    if (!(index in arr) || arr[index] == undefined) continue;
    let val = arr[index][by];
    if (newUsers[val] == undefined) {
      newUsers[val] = [];
    }
    newUsers[val].push(arr[index]);
  }
  return newUsers;
}

const users = [
  { name: "osama", role: "admin" },
  undefined,
  null,
  { name: "osama2", role: "user" },
  { name: "ali", role: "admin" },
  { name: "osama3", role: "user" },
  { name: "osama5", role: "manager" },
  { name: "osama6", role: "Manager" },
];

console.log(groupBy(users, "role"));
