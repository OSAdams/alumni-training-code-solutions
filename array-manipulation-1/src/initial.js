'use strict';
/* exported initial */
const initial = (array) => {
  const result = [];
  for (let i = 0; i < array.length - 1; i++) {
    result.push(array[i]);
  }
  return result;
};
