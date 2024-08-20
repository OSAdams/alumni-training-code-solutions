'use strict';
/* exported compact */
const compact = (array) => {
  const result = [];
  for (const index of array) {
    index && result.push(index);
  }
  return result;
};
