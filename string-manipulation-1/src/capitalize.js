'use strict';
/* exported capitalize */
const capitalize = (word) => {
  let result = '';
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      result += word[i].toUpperCase();
    } else {
      result += word[i].toLowerCase();
    }
  }
  return result;
};
