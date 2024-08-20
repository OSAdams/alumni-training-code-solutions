'use strict';
/* exported tail */
const tail = (list) => {
  const result = [];
  for (let i = 1; i < list.length; i++) {
    result.push(list[i]);
  }
  return result;
};
