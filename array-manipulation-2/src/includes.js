'use strict';
/* exported includes */
const includes = (array, value) => {
  for (const index of array) {
    if (index === value) {
      return true;
    }
  }
  return false;
};
