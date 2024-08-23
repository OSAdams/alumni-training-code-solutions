'use strict';
/* exported chunk */
const chunk = (array, size) => {
  const result = [];
  let subArray = [];
  let index = 0;
  if (array.length === 0 || array.length < size) {
    return result;
  }
  while (index < array.length) {
    subArray.push(array[index]);
    if ((index + 1) % size === 0 || index === array.length - 1) {
      result.push(subArray);
      subArray = [];
    }
    index++;
  }
  return result;
};
