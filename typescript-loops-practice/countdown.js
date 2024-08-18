'use strict';
/* exported countdown */
const countdown = (num) => {
  const result = [];
  let ourNum = num;
  while (ourNum >= 0) {
    result.push(ourNum);
    ourNum--;
  }
  return result;
};
