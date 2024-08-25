'use strict';
/* exported capitalizeWords */
const capitalizeWords = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (i === 0 || string[i - 1] === ' ') {
      result += string[i].toUpperCase();
    } else {
      result += string[i].toLowerCase();
    }
  }
  return result;
};
