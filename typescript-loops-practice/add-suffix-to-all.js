'use strict';
/* exported addSuffixToAll */
const addSuffixToAll = (words, suffix) => {
  const result = [];
  for (const i of words) {
    result.push(i + suffix);
  }
  return result;
};
