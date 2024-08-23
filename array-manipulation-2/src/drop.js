'use strict';
/* exported drop */
const drop = (array, count) => {
  const result = [];
  if (array.length === 0) {
    return result;
  }
  for (let i = count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
};
