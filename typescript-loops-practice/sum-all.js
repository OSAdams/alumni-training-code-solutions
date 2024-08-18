'use strict';
/* exported sumAll */
const sumAll = (numbers) => {
  let result = 0;
  for (const i of numbers) {
    result += i;
  }
  return result;
};
