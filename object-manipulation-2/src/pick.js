'use strict';
/* exported pick */
const pick = (source, keys) => {
  const result = {};
  for (const key in keys) {
    if (source[keys[key]] !== undefined) {
      result[keys[key]] = source[keys[key]];
    }
  }
  return result;
};
