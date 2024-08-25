'use strict';
/* exported lastChars */
const lastChars = (length, string) => {
  if (string.length < length) {
    return string;
  }
  let result = '';
  for (let i = string.length - length; i < string.length; i++) {
    result += string[i];
  }
  return result;
};
