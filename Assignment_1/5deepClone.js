"use strict";

function deepClone(obj) {
  if (typeof obj === "object" && obj !== null) {
    const copy = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        copy[key] = deepClone(obj[key]);
        continue;
      }
      copy[key] = obj[key];
    }
    return copy;
  }
  return obj;
}

const user1 = {
  name: "Osama",
  numbers: [1, 2, 3],
  address: {
    cite: "Sana'a",
  },
};

const user2 = deepClone(user1);

user1.name = "aaa";
user2.address.cite = "Taiz";
console.log(user1);
console.log(user2);
console.log(user1 === user2);

const arr = [1, 2, 3];
const arr2 = deepClone(arr);

arr2[1] = 444;
console.log(arr);
console.log(arr2);
console.log(arr === arr2);
