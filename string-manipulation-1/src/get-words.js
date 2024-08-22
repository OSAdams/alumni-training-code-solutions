'use strict';
/* exported getWords */
const getWords = (string) => {
  if (!string) {
    return [];
  }
  return string.split(' ');
};
