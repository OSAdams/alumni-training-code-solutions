'use strict';
/* exported findIndex */
const findIndex = (array, value) => {
  for (const i in array) {
    if (array[i] === value) {
      return +i;
    }
  }
  return -1;
};
