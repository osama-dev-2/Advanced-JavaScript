"use strict";

function compose(...fun_arr) {
  const length = fun_arr.length - 1;
  return function (value) {
    for (let index = length; index >= 0; index--) {
      if (typeof fun_arr[index] !== "function") {
        throw new TypeError("must be a function");
      }
      value = fun_arr[index](value);
    }

    return value;
  };
}
function fun1(n) {
  return n + 1;
}
function fun2(n) {
  return n * 2;
}
function fun3(n) {
  return n * n;
}
const calculate = compose(fun1, fun2, fun3);
console.log(calculate(5));
