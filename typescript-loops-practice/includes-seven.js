'use strict';
/* exported includesSeven */
const includesSeven = (array) => {
  for (const i of array) {
    if (i === 7) {
      return true;
    }
  }
  return false;
};
