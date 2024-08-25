'use strict';
/* exported numVowels */
const numVowels = (string) => {
  let count = 0;
  const lowerCaseString = string.toLowerCase();
  for (const index of lowerCaseString) {
    if (
      index === 'a' ||
      index === 'e' ||
      index === 'i' ||
      index === 'o' ||
      index === 'u'
    ) {
      count++;
    }
  }
  return count;
};
