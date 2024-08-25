'use strict';
/* exported capitalizeWord */
const capitalizeWord = (word) => {
  const firstLetter = word[0].toUpperCase();
  const lowerCaseWord = word.slice(1, word.length).toLowerCase();
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  return firstLetter + lowerCaseWord;
};
