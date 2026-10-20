"use strict";

function createCounter(start = 0) {
    let count = start;
    return function () {
        count++;
        return count;
    };
}
const counter = createCounter(12);
console.log(counter());
console.log(counter());
const counter2 = createCounter();
console.log(counter2());
