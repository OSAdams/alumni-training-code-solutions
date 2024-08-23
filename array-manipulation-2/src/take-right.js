'use strict';
/* exported takeRight */
const takeRight = (array, count) => {
  const result = [];
  if (array.length === 0) {
    return result;
  } else if (array.length < count) {
    return array;
  }
  for (let i = array.length - count; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
};
