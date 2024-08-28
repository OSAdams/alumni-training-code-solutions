'use strict';
/* exported omit */
const omit = (source, keys) => {
  const result = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      result[key] = source[key];
    }
  }
  return result;
};
