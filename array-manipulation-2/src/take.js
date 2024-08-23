'use strict';
/* exported take */
const take = (array, count) => {
  const result = [];
  if (array.length === 0) {
    return result;
  }
  let counter = 0;
  while (counter < count) {
    result.push(array[counter]);
    counter++;
  }
  return result;
};
