'use strict';
/* exported invert */
const invert = (source) => {
  const result = {};
  for (const key in source) {
    const newKey = source[key].toString();
    result[newKey] = key;
  }
  return result;
};
