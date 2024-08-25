'use strict';
/* exported swapChars */
const swapChars = (firstIndex, secondIndex, string) => {
  const firstChar = string[firstIndex];
  const secondChar = string[secondIndex];
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      result += secondChar;
    } else if (i === secondIndex) {
      result += firstChar;
    } else {
      result += string[i];
    }
  }
  return result;
};
